type TrackType = 'video' | 'audio' | 'text' | 'image' | 'effect' | 'transition' | 'filter';

interface TrackScale {
    start: number, // 开始坐标 默认0
    step: number,// 步进，与视频fps同步 默认30
    scale: number, // 时间轴缩放比例 默认0
    focusPosition: { // 选中元素时在时间轴中高亮显示
      start: number, // 起始帧数 start 默认0
      end: number, // 结束帧数 end 默认0
    },
  }
interface BaseTractItem {
  id: string,
  type: TrackType,
  name: string,
  start: number,
  end: number,
  frameCount: number,
  offsetL: number, // 音视频左侧裁切
  offsetR: number, // 音视频右侧裁切
}
interface VideoTractItem extends BaseTractItem{
  time: number,
  format: string,
  source: string,
  cover: string,
  width: number,
  height: number,
  fps: number
}
interface AudioTractItem extends BaseTractItem{
  time: number,
  format: string,
  source: string
  cover: string
}

interface TextTractItem extends BaseTractItem{
  cover: string,
  templateId: number
}

interface ImageTractItem extends BaseTractItem{
  source: string,
  format: string,
  width: number,
  height: number,
  sourceFrame: number,
  cover: string
}

interface EffectTractItem extends BaseTractItem{
  templateId: number,
  cover: string
}

interface TransitionTractItem extends BaseTractItem{
  templateId: number,
  cover: string
}

interface FilterTractItem extends BaseTractItem{
  templateId: number,
  cover: string
}

type TrackItem = VideoTractItem | AudioTractItem | TextTractItem | ImageTractItem | EffectTractItem | TransitionTractItem | FilterTractItem;

interface TrackLineItem {
  type: TrackItem['type'],
  main?: boolean,
  list: TrackItem[]
}