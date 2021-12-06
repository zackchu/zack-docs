import { useRef } from "react";
import "./index.scss";

function WaterMark() {
  const cvsEL = useRef(null);

  function changeFile(event) {
    const img = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(img);

    reader.onload = (ev) => {
      const image = new Image();

      image.src = ev.target.result;

      image.onload = () => {
        const cvs = cvsEL.current;

        cvs.width = image.width;
        cvs.height = image.height;

        const ctx = cvs.getContext("2d");

        ctx.drawImage(image, 0, 0);
      };
    };
  }

  function addText() {
    const cvs = cvsEL.current;
    const width = cvs.width;
    const height = cvs.height;

    const ctx = cvs.getContext("2d");

    ctx.save();

    ctx.translate(width * 0.5, height * 0.5);
    ctx.rotate((-Math.PI * 2 * 30) / 360);

    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    ctx.font = "900 150px PingFang SC";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 5;
    ctx.strokeText("some text", 0, 0);

    ctx.restore();
  }

  return (
    <div className="water-mark">
      <canvas className={"canvas"} ref={cvsEL} />

      <input type="file" onChange={changeFile} />

      <button type="button" onClick={addText}>
        Add text
      </button>
    </div>
  );
}

export default WaterMark;
