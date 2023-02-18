import { useState } from 'preact/hooks';
import classnames from 'classnames';
import { useParams } from 'react-router-dom';

import style from './index.module.css';

/**
 * Details
 *
 * @param {object} { data }
 * @return {object} JSX
 */
function Details({ data, canvasRef }) {

  const [ isDownloading, setIsDownloading ] = useState({});

  const { type, value } = useParams();

  const {
    id,
    title,
    director,
    writer,
    year,
    genre,
    fullTitle
  } = data;

  /**
   * handleAseDownload
   *
   * @param {string} filename
   */
  async function handleAseDownload(title) {
    setIsDownloading(prev => ({ ...prev, ase: true }));
    try {
      const response = await fetch(`/ase/${id}`);
      if (!response.ok) throw Error('Bad API response');
      const blob = await response.blob();
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.setAttribute('download', `${title}.ase`);
      anchor.click();
      anchor.remove();
      setIsDownloading(prev => ({ ...prev, ase: false }));
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * handlePngDownload
   *
   * @param {string} filename
   */
  async function handleImageDownload(title, asJpg) {
    const type = asJpg ? 'jpg' : 'png';
    const encoding = asJpg ? 'image/jpeg' : 'image/png';
    setIsDownloading(prev => ({ ...prev, [type]: true }));

    const fontSize = 24;

    const canvas = canvasRef.current;
    const dest = document.createElement('canvas');
    const padding = 20;

    dest.width = canvas.width + (padding * 2);
    dest.height = canvas.height + (fontSize * 4);

    const ctx = dest.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, dest.width, dest.height);

    ctx.drawImage(canvas, padding, fontSize * 2);

    ctx.font = `bold ${fontSize}px Calibri, sans-serif`;
    ctx.fillStyle = 'rgba(255, 255, 220, 0.4)';

    const text = `${fullTitle}, ${year}`;
    const copy = `© Andy Willis ${new Date().getFullYear()}`;
    const measureCopy = ctx.measureText(copy);

    ctx.fillText(text, padding, fontSize + (fontSize / 2));
    ctx.fillText(copy, dest.width - measureCopy.width - padding, dest.height - fontSize);

    const dataUrl = dest.toDataURL(encoding);
    const anchor = document.createElement('a');
    anchor.href = dataUrl;
    anchor.setAttribute('download', `${title}.${type}`);
    anchor.click();
    anchor.remove();
    setIsDownloading(prev => ({ ...prev, [type]: false }));
  }

  const downloadAseButtonStyle = classnames({
    [style.downloadButton]: true,
    [style.disabled]: isDownloading.ase && 'disabled'
  });

  const downloadPngButtonStyle = classnames({
    [style.downloadButton]: true,
    [style.disabled]: isDownloading.png && 'disabled'
  });

  const downloadJpgButtonStyle = classnames({
    [style.downloadButton]: true,
    [style.disabled]: isDownloading.jpg && 'disabled'
  });

  return (
    <div className={style.details}>
      <div>
        <div className={style.label}>No.</div>
        <div className={style.detail}>{id}</div>
      </div>
      <div>
        <div className={style.label}>Title</div>
        <div className={style.detail}>
          <span
            className={classnames({
              [style.type]: true,
              [style.highlight]: type === 'title' && value === title
            })}
          >{title}
          </span>
        </div>
      </div>
      <div>
        <div className={style.label}>Director</div>
        <div className={style.detail}>
          {director.map(el => {

            const spanStyle = classnames({
              [style.type]: true,
              [style.highlight]: type === 'director' && value === el
            });

            const [ last, first ] = el.split(',');

            return (
              <span key={el} className={spanStyle}>
                {first} {last}
              </span>
            );

          })}
        </div>
      </div>
      <div>
        <div className={style.label}>Writer</div>
        <div className={style.detail}>
          {writer.map(el => {

            const spanStyle = classnames({
              [style.type]: true,
              [style.highlight]: type === 'writer' && value === el
            });

            const [ last, first ] = el.split(',');

            return (
              <span key={el} className={spanStyle}>
                {first} {last}
              </span>
            );

          })}
        </div>
      </div>
      <div>
        <div className={style.label}>Year</div>
        <div className={style.detail}>
          <span
            className={classnames({
              [style.type]: true,
              [style.highlight]: type === 'year' && +value === year
            })}
          >{year}
          </span>
        </div>
      </div>
      <div>
        <div className={style.label}>Genre</div>
        <div className={style.detail}>
          {genre.map(el => {

            const spanStyle = classnames({
              [style.type]: true,
              [style.highlight]: type === 'genre' && value === el
            });

            return (
              <span key={el} className={spanStyle}>
                {el}
              </span>
            );

          })}
        </div>
      </div>
      <div>
        <div className={style.label}>Download</div>
        <div className={style.detail}>
          <div className={style.download}>
            <button
              className={downloadAseButtonStyle}
              type="button"
              onClick={() => handleAseDownload(title)}
            >ASE file
            </button>
            <button
              className={downloadPngButtonStyle}
              type="button"
              onClick={() => handleImageDownload(title, false)}
            >PNG image
            </button>
            <button
              className={downloadJpgButtonStyle}
              type="button"
              onClick={() => handleImageDownload(title, true)}
            >JPG image
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Details;
