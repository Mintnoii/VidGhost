export type TrackType = 'video' | 'audio' | 'text' | 'image' | 'effect' | 'transition' | 'filter';

export interface TrackScale {
    start: number, // 开始坐标 默认0
    step: number,// 步进，与视频fps同步 默认30
    scale: number, // 时间轴缩放比例 默认0
    focusPosition: { // 选中元素时在时间轴中高亮显示
      start: number, // 起始帧数 start 默认0
      end: number, // 结束帧数 end 默认0
    },
  }
export interface CanvasConfig {
    width: number,
    height: number,
    bgColor: string, // 背景颜色
    ratio: number, // 设备像素比
    textSize: number, // 字号
    textScale: number, // 支持更小号字： 10 / 12
    lineWidth: number, // 线宽
    textBaseline: string, // 文字对齐基线 (ts 中定义的textBaseLine是一个联合类型)
    textAlign: string, // 文字对齐方式
    longColor: string, // 长线段颜色
    shortColor: string, // 短线段颜色
    textColor: string, // 文字颜色
    subTextColor: string, // 小文字颜色
    focusColor: string, // 选中元素区间
    lineColor: string // 底线颜色
}
export interface UserConfig {
    start: number, // 开始坐标
    step: number, // 步进，与视频fps同步
    scale: number, // 时间轴缩放比例
    focusPosition: { // 选中元素时在时间轴中高亮显示
        start: number, // 起始帧数
        end: number, // 结束帧数
        frameCount: number // 总帧数
    }
}