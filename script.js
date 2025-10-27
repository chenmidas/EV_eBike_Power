function calculate() {
  const g = 9.81, ρ = 1.2, Cd = 0.9, A = 0.6, Crr = 0.015, π = Math.PI;

  const riderWeight = parseFloat(document.getElementById("riderWeight").value);
  const vehicleWeight = parseFloat(document.getElementById("vehicleWeight").value);
  const totalMass = riderWeight + vehicleWeight;

  const V_kmh = parseFloat(document.getElementById("ratedSpeed").value);
  const V = V_kmh / 3.6;
  const t = parseFloat(document.getElementById("accelTime").value);
  const D = parseFloat(document.getElementById("tireDiameter").value);
  const r = D / 2;
  const PI = Math.PI;
  const L = D * PI;

  const sprocketRatio = parseFloat(document.getElementById("sprocketRatio").value);
  const gearRatio = parseFloat(document.getElementById("gearRatio").value);
  const totalRatio = sprocketRatio * gearRatio;

  const accel = V / t;
  const S = 0.5 * accel * t * t;
  const ω = (V / L) * 2 * PI;
  const T = totalMass * accel * r;
  const P = V * T;
  const wheelRPM = (V * 1000 * 60) / (D * PI);
  const motorRPM = wheelRPM * totalRatio;

  const Rf = 0.5 * ρ * Cd * A * V * V;
  const Rr = totalMass * g * Crr;
  const Rt = Rf + Rr;
  const Tr = Rt * r;
  const Pr = Rt * V;
  const totalPower = P + Pr;

  document.getElementById("results").innerHTML = `
    <strong>總質量 Total Mass:</strong> ${totalMass.toFixed(2)} kg<br>
    <strong>額定速度 Rated Speed:</strong> ${V.toFixed(2)} m/s<br>
    <strong>加速度 Acceleration:</strong> ${accel.toFixed(2)} m/s²<br>
    <strong>加速距離 Accel. Distance:</strong> ${S.toFixed(2)} m<br>
    <strong>輪胎週長 Wheel Circumference:</strong> ${L.toFixed(3)} m<br>
    <strong>輪胎半徑 Tire Radius:</strong> ${r.toFixed(4)} m<br>
    <strong>輪胎角速度 Angular Speed:</strong> ${ω.toFixed(2)} rad/s<br>
    <strong>輪胎扭矩 Wheel Torque:</strong> ${T.toFixed(2)} Nm<br>
    <strong>加速所需功率 Accel. Power:</strong> ${P.toFixed(2)} W<br>
    <strong>輪胎轉速 Wheel RPM:</strong> ${wheelRPM.toFixed(0)} RPM<br>
    <strong>馬達轉速 Motor RPM:</strong> ${motorRPM.toFixed(0)} RPM<br>
    <strong>空氣阻力功率 Aero. Power:</strong> ${Pr.toFixed(2)} W<br>
    <strong>總功率 Total Power:</strong> ${totalPower.toFixed(0)} W
  `;
}