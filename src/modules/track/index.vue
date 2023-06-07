<template>
  <div>
    <!-- <video id="player" controls></video> -->
    <canvas ref="canvas" id="canvas"></canvas>
    <input type="file" id="uploader">
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import FFmpeg from '@ffmpeg/ffmpeg'
const { createFFmpeg, fetchFile } = FFmpeg;

const ffmpeg = createFFmpeg({ log: true });
// const video = ref<any>(null);
const frames = ref<any>([]);
const loadFFmpegData = async ()=> {
      await ffmpeg.load();
      const input = await fetch('/src/assets/demo.mp4');
      const data = await input.arrayBuffer();
      // 读取并编码视频文件
      await ffmpeg.FS("writeFile", "demo.mp4", new Uint8Array(data));
      // await ffmpeg.FS('writeFile', 'demo.mp4', await fetchFile('/src/assets/demo.mp4'));
    }

    const  decodeFrames = async() => {
      const result:any = await ffmpeg.run(
        "-i",
        "demo.mp4",
        "-vsync",
        "0",
        "-qscale:v",
        "2",
        "-f",
        "image2pipe",
        "-vcodec",
        "png",
        "-"
      );
      // console.log(result,'result');
      const blobs = [];
      for (let i = 0; i < result.length; i++) {
        blobs.push(new Blob([result[i].data], { type: "image/png" }));
      }
      frames.value = blobs.map((blob) => URL.createObjectURL(blob));
    }
    async function processVideo() {
      // 处理视频
// const imageData = new ImageData(data, canvas.width, canvas.height);
// ctx.putImageData(imageData, 0, 0);
      // await ffmpeg.run('-i', 'demo.mp4', '-f', 'image2', '/src/assets/%d.png');

      // const outputFiles = await ffmpeg.FS('readdir', 'src/assets/');
      // console.log(outputFiles,'outputFiles');
      // const images = outputFiles.filter((file) => file?.name.endsWith('.png'));

      // 读取每一帧画面信息
      // for (let i = 0; i < images.length; i++) {
      //   const file = images[i];
      //   const filePath = `output/${file.name}`;
      //   const contents = await ffmpeg.FS('readFile', filePath);
      //   // 将二进制数据解码成图片
      //   const bitmap = new Uint8Array(contents.buffer);
      //   const blob = new Blob([bitmap], { type: 'image/png' });
      //   const url = URL.createObjectURL(blob);
      //   const img = document.createElement('img');
      //   img.src = url;
      //   img.onload = () => {
      //     // 处理每一帧画面信息
      //     console.log(`第 ${i + 1} 帧画面已经处理完成`);
      //   };
      // }
    }
    const render = () => {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      let frameIndex = 0;
      setInterval(() => {
        const img = new Image();
        img.onload = function () {
          ctx?.drawImage(img, 0, 0);
        };
        img.src = frames.value[frameIndex % frames.value.length];
        frameIndex++;
      }, 1000 / 30);
    }
onMounted(async () => {
  await loadFFmpegData()
  await processVideo()

  // await decodeFrames()
  // render()

})

</script>

<style scoped></style>