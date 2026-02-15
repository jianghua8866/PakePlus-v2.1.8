window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>🦋 仿生蝴蝶控制器</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: linear-gradient(145deg, #1a2f3f 0%, #0e1a26 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 16px;
            color: #e8f0fe;
        }
        
        .controller {
            max-width: 400px;
            width: 100%;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 32px;
            padding: 24px 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(100, 180, 255, 0.2) inset;
            border: 1px solid rgba(100, 180, 255, 0.3);
        }
        
        h1 {
            font-size: 28px;
            font-weight: 500;
            text-align: center;
            margin-bottom: 16px;
            letter-spacing: 2px;
            text-shadow: 0 2px 10px rgba(0, 160, 255, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        h1 span {
            font-size: 32px;
        }
        
        .status-card {
            background: rgba(0, 0, 0, 0.4);
            border-radius: 50px;
            padding: 12px 20px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .status-led {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .led {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ff4444;
            box-shadow: 0 0 8px #ff4444;
            transition: all 0.3s ease;
        }
        
        .led.connected {
            background: #4caf50;
            box-shadow: 0 0 12px #4caf50;
        }
        
        .device-name {
            font-size: 14px;
            opacity: 0.8;
        }
        
        .btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 8px 16px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            backdrop-filter: blur(5px);
        }
        
        .btn:hover {
            background: rgba(100, 180, 255, 0.3);
            border-color: #64b4ff;
        }
        
        .btn.primary {
            background: #2a6c9e;
            border-color: #64b4ff;
            box-shadow: 0 4px 12px rgba(0, 120, 255, 0.3);
        }
        
        .section {
            margin-bottom: 28px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 24px;
            padding: 16px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .section-title {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 16px;
            color: #a0d0ff;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .throttle-area {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        
        .throttle-value {
            font-size: 42px;
            font-weight: 700;
            color: #ffd966;
            text-shadow: 0 0 20px rgba(255, 200, 50, 0.5);
            line-height: 1;
        }
        
        .throttle-slider {
            width: 100%;
            height: 40px;
            -webkit-appearance: none;
            background: transparent;
        }
        
        .throttle-slider::-webkit-slider-runnable-track {
            height: 12px;
            background: linear-gradient(90deg, #2a6c9e, #ffaa33, #ff5533);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .throttle-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background: white;
            margin-top: -10px;
            box-shadow: 0 4px 12px black;
            border: 2px solid #64b4ff;
            cursor: pointer;
        }
        
        .button-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 8px;
        }
        
        .direction-pad {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 16px 0;
        }
        
        .direction-btn {
            width: 70px;
            height: 70px;
            border-radius: 40px;
            background: rgba(0, 0, 0, 0.4);
            border: 2px solid rgba(255, 255, 255, 0.2);
            font-size: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.1s;
            box-shadow: 0 8px 0 rgba(0, 0, 0, 0.3);
        }
        
        .direction-btn:active {
            transform: translateY(6px);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
        }
        
        .direction-btn.left {
            background: #2a4f6e;
        }
        
        .direction-btn.right {
            background: #2a4f6e;
        }
        
        .trim-controls {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        
        .trim-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .trim-label {
            width: 70px;
            font-size: 15px;
        }
        
        .trim-buttons {
            display: flex;
            gap: 15px;
        }
        
        .trim-btn {
            width: 44px;
            height: 44px;
            border-radius: 30px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 20px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        
        .trim-btn:active {
            background: #2a6c9e;
        }
        
        .trim-value {
            min-width: 40px;
            text-align: center;
            font-weight: 600;
            color: #ffd966;
            font-size: 18px;
        }
        
        .amplitude-area {
            margin-top: 16px;
        }
        
        .amplitude-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        
        .amplitude-value {
            color: #64b4ff;
            font-weight: 600;
            font-size: 20px;
        }
        
        .amplitude-slider {
            width: 100%;
            height: 30px;
            -webkit-appearance: none;
            background: transparent;
        }
        
        .amplitude-slider::-webkit-slider-runnable-track {
            height: 8px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
        }
        
        .amplitude-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: #64b4ff;
            margin-top: -8px;
            border: 2px solid white;
            cursor: pointer;
        }
        
        .param-row {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
            font-size: 14px;
            background: rgba(0, 0, 0, 0.3);
            padding: 8px 12px;
            border-radius: 30px;
        }
        
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            opacity: 0.5;
        }
    </style>
</head>
<body>
    <div class="controller">
        <h1>
            <span>🦋</span> 仿生蝴蝶 <span>🦋</span>
        </h1>
        
        <!-- 蓝牙连接状态卡 -->
        <div class="status-card">
            <div class="status-led">
                <div class="led" id="ledIndicator"></div>
                <span id="statusText">未连接</span>
            </div>
            <div class="device-name" id="deviceName">---</div>
            <button class="btn primary" id="connectBtn">连接设备</button>
        </div>
        
        <!-- 油门控制区 -->
        <div class="section">
            <div class="section-title">
                <span>⚡</span> 油门 / 扇动频率
            </div>
            <div class="throttle-area">
                <div class="throttle-value" id="throttleDisplay">50</div>
                <input type="range" class="throttle-slider" id="throttleSlider" min="0" max="100" value="50">
            </div>
        </div>
        
        <!-- 方向控制区 -->
        <div class="section">
            <div class="section-title">
                <span>🧭</span> 方向控制
            </div>
            <div class="direction-pad">
                <div class="direction-btn left" id="turnLeft">←</div>
                <div class="direction-btn right" id="turnRight">→</div>
            </div>
            <div class="param-row">
                <span>当前转向</span>
                <span id="yawDisplay" style="color:#64b4ff;">居中</span>
            </div>
        </div>
        
        <!-- 微调控制区 -->
        <div class="section">
            <div class="section-title">
                <span>⚙️</span> 翅膀微调
            </div>
            <div class="trim-controls">
                <div class="trim-row">
                    <span class="trim-label">左翅膀</span>
                    <div class="trim-buttons">
                        <div class="trim-btn" id="leftTrimDown">−</div>
                        <span class="trim-value" id="leftTrimValue">0</span>
                        <div class="trim-btn" id="leftTrimUp">+</div>
                    </div>
                </div>
                <div class="trim-row">
                    <span class="trim-label">右翅膀</span>
                    <div class="trim-buttons">
                        <div class="trim-btn" id="rightTrimDown">−</div>
                        <span class="trim-value" id="rightTrimValue">0</span>
                        <div class="trim-btn" id="rightTrimUp">+</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 振翅幅度控制区 -->
        <div class="section">
            <div class="section-title">
                <span>📏</span> 振翅幅度
            </div>
            <div class="amplitude-area">
                <div class="amplitude-header">
                    <span>幅度</span>
                    <span class="amplitude-value" id="ampDisplay">70°</span>
                </div>
                <input type="range" class="amplitude-slider" id="ampSlider" min="30" max="150" value="70">
            </div>
        </div>
        
        <!-- 实时参数总览 -->
        <div class="param-row">
            <span>油门</span>
            <span id="paramThrottle">50</span>
            <span>幅度</span>
            <span id="paramAmp">70</span>
            <span>微调</span>
            <span id="paramTrim">L0/R0</span>
        </div>
        
        <div class="footer">
            ESP32 仿生蝴蝶专用控制器 | 蓝牙连接
        </div>
    </div>
    
    <script>
        class ButterflyController {
            constructor() {
                // 控制参数
                this.throttle = 50;          // 油门 0-100
                this.yaw = 0;                 // 转向 -50~50 (负左正右)
                this.leftTrim = 0;             // 左微调 -20~20
                this.rightTrim = 0;            // 右微调 -20~20
                this.amplitude = 70;           // 幅度 30-150
                
                // 蓝牙相关
                this.bluetoothDevice = null;
                this.bluetoothCharacteristic = null;
                this.isConnected = false;
                
                // 蓝牙服务UUID (ESP32常用)
                this.SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
                this.CHARACTERISTIC_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
                
                // 初始化UI绑定
                this.initElements();
                this.initEventListeners();
                this.updateUI();
            }
            
            initElements() {
                // 状态元素
                this.ledIndicator = document.getElementById('ledIndicator');
                this.statusText = document.getElementById('statusText');
                this.deviceName = document.getElementById('deviceName');
                this.connectBtn = document.getElementById('connectBtn');
                
                // 油门
                this.throttleSlider = document.getElementById('throttleSlider');
                this.throttleDisplay = document.getElementById('throttleDisplay');
                
                // 方向
                this.turnLeft = document.getElementById('turnLeft');
                this.turnRight = document.getElementById('turnRight');
                this.yawDisplay = document.getElementById('yawDisplay');
                
                // 微调
                this.leftTrimUp = document.getElementById('leftTrimUp');
                this.leftTrimDown = document.getElementById('leftTrimDown');
                this.rightTrimUp = document.getElementById('rightTrimUp');
                this.rightTrimDown = document.getElementById('rightTrimDown');
                this.leftTrimValue = document.getElementById('leftTrimValue');
                this.rightTrimValue = document.getElementById('rightTrimValue');
                
                // 幅度
                this.ampSlider = document.getElementById('ampSlider');
                this.ampDisplay = document.getElementById('ampDisplay');
                
                // 参数总览
                this.paramThrottle = document.getElementById('paramThrottle');
                this.paramAmp = document.getElementById('paramAmp');
                this.paramTrim = document.getElementById('paramTrim');
            }
            
            initEventListeners() {
                // 连接按钮
                this.connectBtn.addEventListener('click', () => this.toggleConnection());
                
                // 油门滑块
                this.throttleSlider.addEventListener('input', (e) => {
                    this.throttle = parseInt(e.target.value);
                    this.updateUI();
                    this.sendCommand(`THR:${this.throttle}`);
                });
                
                // 方向按钮
                this.turnLeft.addEventListener('mousedown', () => {
                    this.yaw = -50;
                    this.updateUI();
                    this.sendCommand('YAW:LEFT');
                });
                
                this.turnLeft.addEventListener('mouseup', () => {
                    this.yaw = 0;
                    this.updateUI();
                    this.sendCommand('YAW:CENTER');
                });
                
                this.turnRight.addEventListener('mousedown', () => {
                    this.yaw = 50;
                    this.updateUI();
                    this.sendCommand('YAW:RIGHT');
                });
                
                this.turnRight.addEventListener('mouseup', () => {
                    this.yaw = 0;
                    this.updateUI();
                    this.sendCommand('YAW:CENTER');
                });
                
                // 触摸事件兼容手机
                ['touchstart', 'touchend'].forEach(event => {
                    this.turnLeft.addEventListener(event, (e) => {
                        e.preventDefault();
                        if (event === 'touchstart') {
                            this.yaw = -50;
                            this.sendCommand('YAW:LEFT');
                        } else {
                            this.yaw = 0;
                            this.sendCommand('YAW:CENTER');
                        }
                        this.updateUI();
                    });
                    
                    this.turnRight.addEventListener(event, (e) => {
                        e.preventDefault();
                        if (event === 'touchstart') {
                            this.yaw = 50;
                            this.sendCommand('YAW:RIGHT');
                        } else {
                            this.yaw = 0;
                            this.sendCommand('YAW:CENTER');
                        }
                        this.updateUI();
                    });
                });
                
                // 微调按钮
                this.leftTrimUp.addEventListener('click', () => {
                    this.leftTrim = Math.min(20, this.leftTrim + 1);
                    this.updateUI();
                    this.sendCommand(`LTRIM:${this.leftTrim}`);
                });
                
                this.leftTrimDown.addEventListener('click', () => {
                    this.leftTrim = Math.max(-20, this.leftTrim - 1);
                    this.updateUI();
                    this.sendCommand(`LTRIM:${this.leftTrim}`);
                });
                
                this.rightTrimUp.addEventListener('click', () => {
                    this.rightTrim = Math.min(20, this.rightTrim + 1);
                    this.updateUI();
                    this.sendCommand(`RTRIM:${this.rightTrim}`);
                });
                
                this.rightTrimDown.addEventListener('click', () => {
                    this.rightTrim = Math.max(-20, this.rightTrim - 1);
                    this.updateUI();
                    this.sendCommand(`RTRIM:${this.rightTrim}`);
                });
                
                // 幅度滑块
                this.ampSlider.addEventListener('input', (e) => {
                    this.amplitude = parseInt(e.target.value);
                    this.updateUI();
                    this.sendCommand(`AMP:${this.amplitude}`);
                });
            }
            
            // 发送指令到ESP32
            sendCommand(command) {
                if (!this.isConnected || !this.bluetoothCharacteristic) {
                    console.log('蓝牙未连接，指令被忽略:', command);
                    return;
                }
                
                // 添加换行符，ESP32端用readString()读取
                const data = new TextEncoder().encode(command + '\n');
                
                this.bluetoothCharacteristic.writeValue(data)
                    .then(() => console.log('发送指令:', command))
                    .catch(error => {
                        console.error('发送失败:', error);
                        this.isConnected = false;
                        this.updateUI();
                    });
            }
            
            // 切换蓝牙连接
            async toggleConnection() {
                if (this.isConnected) {
                    this.disconnectDevice();
                } else {
                    await this.connectDevice();
                }
            }
            
            async connectDevice() {
                try {
                    // 请求蓝牙设备
                    this.bluetoothDevice = await navigator.bluetooth.requestDevice({
                        filters: [
                            { namePrefix: 'Butterfly' },  // 匹配以Butterfly开头的设备
                            { namePrefix: 'ESP32' },      // 匹配ESP32
                            { services: [this.SERVICE_UUID] }
                        ],
                        optionalServices: [this.SERVICE_UUID]
                    });
                    
                    this.deviceName.textContent = this.bluetoothDevice.name || '未知设备';
                    
                    // 连接GATT服务器
                    const server = await this.bluetoothDevice.gatt.connect();
                    
                    // 获取服务
                    const service = await server.getPrimaryService(this.SERVICE_UUID);
                    
                    // 获取特征
                    this.bluetoothCharacteristic = await service.getCharacteristic(this.CHARACTERISTIC_UUID);
                    
                    this.isConnected = true;
                    
                    // 监听断开连接
                    this.bluetoothDevice.addEventListener('gattserverdisconnected', () => {
                        this.isConnected = false;
                        this.updateUI();
                    });
                    
                    // 发送初始参数
                    setTimeout(() => {
                        this.sendCommand(`THR:${this.throttle}`);
                        this.sendCommand(`AMP:${this.amplitude}`);
                        this.sendCommand(`LTRIM:${this.leftTrim}`);
                        this.sendCommand(`RTRIM:${this.rightTrim}`);
                    }, 500);
                    
                } catch (error) {
                    console.error('连接失败:', error);
                    alert('连接失败: ' + error.message);
                }
                
                this.updateUI();
            }
            
            disconnectDevice() {
                if (this.bluetoothDevice && this.bluetoothDevice.gatt.connected) {
                    this.bluetoothDevice.gatt.disconnect();
                }
                this.isConnected = false;
                this.bluetoothCharacteristic = null;
                this.updateUI();
            }
            
            // 更新所有UI显示
            updateUI() {
                // 更新LED和状态文字
                if (this.isConnected) {
                    this.ledIndicator.classList.add('connected');
                    this.statusText.textContent = '已连接';
                } else {
                    this.ledIndicator.classList.remove('connected');
                    this.statusText.textContent = '未连接';
                }
                
                // 更新油门显示
                this.throttleDisplay.textContent = this.throttle;
                this.paramThrottle.textContent = this.throttle;
                
                // 更新转向显示
                if (this.yaw < 0) this.yawDisplay.textContent = '左转';
                else if (this.yaw > 0) this.yawDisplay.textContent = '右转';
                else this.yawDisplay.textContent = '居中';
                
                // 更新微调显示
                this.leftTrimValue.textContent = this.leftTrim;
                this.rightTrimValue.textContent = this.rightTrim;
                this.paramTrim.textContent = `L${this.leftTrim}/R${this.rightTrim}`;
                
                // 更新幅度显示
                this.ampDisplay.textContent = this.amplitude + '°';
                this.paramAmp.textContent = this.amplitude;
                
                // 同步滑块位置
                this.throttleSlider.value = this.throttle;
                this.ampSlider.value = this.amplitude;
            }
        }
        
        // 初始化控制器
        const controller = new ButterflyController();
        
        // 检查Web Bluetooth API支持
        if (!navigator.bluetooth) {
            alert('您的浏览器不支持Web Bluetooth API。请使用Chrome、Edge或Opera浏览器，或在PakePlus中打包使用。');
        }
    </script>
</body>
</html>