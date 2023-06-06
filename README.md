# VidGhost

## 项目依赖
- demuxer

## 开发思路
Webassembly 的出现为前端完全实现视频帧截取提供了可能。
总体设计思路为：将 ffmpeg 编译为 Webassembly 库，然后通过 js 调用相关的接口截取视频帧，再将截取到的图像信息通过 canvas 绘制出来。

## 问题记录
### SharedArrayBuffer is not defined 
- https://github.com/ffmpegwasm/ffmpeg.wasm#installation
- https://github.com/ffmpegwasm/ffmpeg.wasm/issues/263