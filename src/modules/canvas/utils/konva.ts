import Konva from 'konva'
import { nanoid } from 'nanoid'

const loadImage = (url: string) => {
  return new Promise(resolve => {
    const imageObj = new window.Image()
    imageObj.onload = () => {
      resolve(imageObj)
    }
    imageObj.src = url
  })
}


const genElementContainer = (data: any, width: number, height: number, zIndex?:number) => {
  const group = new Konva.Group({
    id: nanoid(),
    zIndex: zIndex || 0,
    name: 'elementGroup',
    width,
    height,
    // rotation: data.rotation,
    groupId: '',
    draggable: true
  })
  const rect = new Konva.Rect({
    name: 'backgroundRect',
    // opacity: getOpacity(data),
    // fillLinearGradientEndPointY:getHeight(data, 100),
    draggable: false
  })
  group.add(rect)
  return group
}



export {
  loadImage,
  genElementContainer
}