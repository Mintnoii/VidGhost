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
  return new Konva.Group({
    id: nanoid(),
    zIndex: zIndex || 0,
    name: 'elementNode',
    width,
    height,
    // rotation: data.rotation,
    groupId: '',
    draggable: true
  }
)
}


export {
  loadImage,
  genElementContainer
}