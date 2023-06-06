<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import * as FFmpeg from "@ffmpeg/ffmpeg";
import { ref, onMounted } from "vue";
const canvas = ref(null);

    const renderFrames = async (inputFile) => {
      const ffmpeg = FFmpeg.createFFmpeg({
        log: true,
      });
      await ffmpeg.load();

      const videoInfo = await ffmpeg.probe(inputFile);
      console.log(videoInfo);

      // Extract all keyframes from the input video
      const frameRate = videoInfo.streams[0].avg_frame_rate.split("/")[0];
      const result = await ffmpeg.run(
        "-i",
        inputFile,
        "-vf",
        `select='eq(pict_type\\,I)'`,
        "-vsync",
        "vfr",
        "-q:v",
        "2",
        "-f",
        "image2pipe",
        "-"
      );

      const frames = [];

      // Decode each frame and add it to the list
      const decoder = new TextDecoder();
      for (let i = 0; i < result.data.length; ) {
        const size = new DataView(result.data.buffer, i, 4).getUint32(0);
        i += 4;

        const data = result.data.slice(i, i + size);
        i += size;

        const blob = new Blob([data], { type: "image/jpeg" });
        const url = URL.createObjectURL(blob);

        const img = await loadImage(url);
        frames.push(img);
      }

      // Render the frames onto the canvas
      const context = canvas.value.getContext("2d");
      for (const frame of frames) {
        context.drawImage(frame, 0, 0, canvas.value.width, canvas.value.height);
        await sleep(1000 / frameRate); // Wait for the specified frame rate
      }
    };

    const loadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
      });
    };

    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    onMounted(() => {
      renderFrames('src/assets/demo.mp4');
    });
</script>
