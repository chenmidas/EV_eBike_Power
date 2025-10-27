
function calculate() {
    const m_r = parseFloat(document.getElementById('mass_rider').value);
    const m_v = parseFloat(document.getElementById('mass_vehicle').value);
    const v_kmh = parseFloat(document.getElementById('rated_speed').value);
    const tire_d = parseFloat(document.getElementById('tire_diameter').value);
    const t = parseFloat(document.getElementById('accel_time').value);
    const gear = parseFloat(document.getElementById('gear_ratio').value);
    const hub = parseFloat(document.getElementById('hub_ratio').value);

    const m_total = m_r + m_v;
    const v_mps = v_kmh / 3.6;
    const a = v_mps / t;
    const s = 0.5 * a * t * t;
    const tire_radius = tire_d / 2;
    const wheel_angular_speed = v_mps / tire_radius;
    const torque = m_total * a * tire_radius;
    const power = m_total * a * v_mps;
    const rpm_wheel = wheel_angular_speed * 60 / (2 * Math.PI);
    const rpm_motor = rpm_wheel * gear * hub;

    document.getElementById('results').innerHTML = `
        <p><strong>總質量:</strong> ${m_total.toFixed(2)} kg</p>
        <p><strong>額定速度:</strong> ${v_mps.toFixed(2)} m/s</p>
        <p><strong>加速度:</strong> ${a.toFixed(2)} m/s²</p>
        <p><strong>加速距離:</strong> ${s.toFixed(2)} m</p>
        <p><strong>輪胎角速度:</strong> ${wheel_angular_speed.toFixed(2)} rad/s</p>
        <p><strong>輪胎扭矩:</strong> ${torque.toFixed(2)} Nm</p>
        <p><strong>加速所需功率:</strong> ${power.toFixed(2)} W</p>
        <p><strong>輪胎轉速:</strong> ${rpm_wheel.toFixed(0)} RPM</p>
        <p><strong>馬達轉速:</strong> ${rpm_motor.toFixed(0)} RPM</p>
    `;
}
