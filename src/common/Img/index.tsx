import {useImage} from 'react-image'
import {FC} from 'react';

export interface IImg {
  imagePath: string
  alt: string
  classes: string
  onClick?: () => void
}

const Img: FC<IImg> = ({ imagePath, alt, classes, onClick }) => {
  const fallbackImage = '/images/icons/primogem.png'
  const {src} = useImage({
    srcList: [imagePath, fallbackImage],
  })

  return <img src={src} alt={alt} className={classes} onClick={onClick} />
}

export default Img
