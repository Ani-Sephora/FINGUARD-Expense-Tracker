function renderFlowChart(values){
  const svg = document.getElementById("flowChart");
  if(!svg) return;

  const W = 600, H = 240;
  svg.innerHTML = "";

  const data = (values && values.length) ? values : [320, 210, 180, 95, 110, 60, 70];
  const maxV = Math.max(...data);
  const minV = Math.min(...data);

  const padX = 28, padY = 18;

  const scaleX = (i) => padX + (i * (W - padX*2) / (data.length - 1));
  const scaleY = (v) => {
    const t = (v - minV) / (maxV - minV || 1);
    return (H - padY) - t * (H - padY*2);
  };

  // grid
  for(let i=0;i<5;i++){
    const y = padY + i*(H-padY*2)/4;
    const line = document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1", padX);
    line.setAttribute("x2", W-padX);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "#eee2bf");
    svg.appendChild(line);
  }

  // path
  let d = "";
  data.forEach((v,i)=>{
    const x = scaleX(i);
    const y = scaleY(v);
    d += (i===0) ? `M ${x} ${y}` : ` L ${x} ${y}`;
  });

  const path = document.createElementNS("http://www.w3.org/2000/svg","path");
  path.setAttribute("d", d);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "#d64545");
  path.setAttribute("stroke-width", "3");
  path.setAttribute("stroke-linecap", "round");
  svg.appendChild(path);

  // points
  data.forEach((v,i)=>{
    const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cx", scaleX(i));
    c.setAttribute("cy", scaleY(v));
    c.setAttribute("r", "4");
    c.setAttribute("fill", "#fff");
    c.setAttribute("stroke", "#d64545");
    c.setAttribute("stroke-width", "2");
    svg.appendChild(c);
  });
}