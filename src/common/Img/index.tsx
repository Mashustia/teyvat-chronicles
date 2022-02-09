import {useImage} from 'react-image'
import {FC} from 'react';

export interface IImg {
  imagePath: string
  alt: string
  classes: string
  onClick?: () => void
}

const Img: FC<IImg> = ({ imagePath, alt, classes, onClick }) => {
  const {src} = useImage({
    srcList: imagePath,
  })

  return <img src={src} alt={alt} className={classes} onClick={onClick} />
}

export default Img
