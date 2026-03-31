@import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600&family=Cormorant+Garamond:ital@1&display=swap');

:root {
    --bg-dark: #000000;
    --chat-bg: rgba(10, 10, 10, 0.6);
    --bubble-received: #262628;
    --text-main: #ffffff;
    --text-muted: #8e8e93;
    --accent-green: #34c759;
    --accent-red: #ff3b30;
    --accent-blue: #0a84ff;
    --glass-border: rgba(255, 255, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body {
    background-color: var(--bg-dark);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    color: var(--text-main);
}

/* Floating Wallpaper Text (from previous version) */
#floating-background {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: 1; pointer-events: none;
}
.floating-word {
    position: absolute;
    font-family: 'Cormorant Garamond', serif;
    color: #ffb3c1;
    white-space: nowrap;
    animation: floatUpwards linear infinite;
    bottom: -10%;
}

/* Restrict UI to a phone-sized container even on desktop */
#phone-container {
    width: 100%;
    max-width: 430px; /* iPhone Pro Max width */
    height: 100%;
    max-height: 932px;
    position: relative;
    z-index: 10;
    background: var(--chat-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 0 50px rgba(0,0,0,0.5);
    overflow: hidden;
}

/* Screen Management */
.screen {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    display: flex; flex-direction: column;
    opacity: 0; pointer-events: none;
    transition: opacity 0.5s ease;
}
.screen.active {
    opacity: 1; pointer-events: all;
}

/* --- CALL SCREEN --- */
#call-screen {
    justify-content: space-between;
    padding: 60px 20px 80px 20px;
    background: linear-gradient(180deg, rgba(30,30,30,0.8) 0%, rgba(0,0,0,0.9) 100%);
}

.caller-info {
    text-align: center;
    margin-top: 40px;
}

.avatar {
    width: 120px; height: 120px;
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
    border-radius: 50%;
    margin: 0 auto 20px auto;
    display: flex; justify-content: center; align-items: center;
    font-size: 3rem;
    box-shadow: 0 10px 30px rgba(255, 154, 158, 0.3);
    animation: pulse 2s infinite;
}

.caller-name {
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 8px;
}

.call-status {
    font-size: 1.1rem;
    color: var(--text-muted);
}

.call-actions {
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
}

.action-btn-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.action-btn-group span {
    font-size: 0.9rem;
    color: var(--text-main);
}

.call-btn {
    width: 75px; height: 75px;
    border-radius: 50%;
    border: none;
    display: flex; justify-content: center; align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.call-btn svg {
    width: 35px; height: 35px; color: white;
}

.accept-btn {
    background-color: var(--accent-green);
    animation: bounce 2s infinite;
}

.decline-btn {
    background-color: var(--accent-red);
    position: relative; /* For the dodging effect */
}

/* --- CHAT SCREEN --- */
#chat-screen {
    background: transparent;
}

.chat-header {
    height: 80px;
    background: rgba(20, 20, 20, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--glass-border);
    display: flex; align-items: center;
    padding: 30px 15px 10px 15px; /* Account for mobile notch */
    z-index: 20;
}

.back-btn {
    font-size: 2.5rem;
    color: var(--accent-blue);
    margin-right: 15px;
    margin-top: -5px;
}

.header-avatar {
    width: 40px; height: 40px;
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
    border-radius: 50%;
    display: flex; justify-content: center; align-items: center;
    font-size: 1.2rem; margin-right: 10px;
}

.header-info h2 { font-size: 1rem; font-weight: 600; }
.header-info p { font-size: 0.8rem; color: var(--text-muted); }

.chat-body {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    scroll-behavior: smooth;
}

.message-wrapper {
    display: flex;
    align-items: flex-end;
    margin-bottom: 5px;
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.4s forwards;
}

.message-bubble {
    background: var(--bubble-received);
    padding: 12px 16px;
    border-radius: 20px;
    border-bottom-left-radius: 4px;
    max-width: 80%;
    font-size: 1.05rem;
    line-height: 1.4;
    position: relative;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.chat-footer {
    padding: 15px 20px 25px 20px;
    background: rgba(20, 20, 20, 0.85);
    backdrop-filter: blur(10px);
}

.fake-input {
    background: #1c1c1e;
    border-radius: 20px;
    border: 1px solid #333;
    padding: 10px 15px;
    display: flex; justify-content: space-between; align-items: center;
}

.fake-input .placeholder { color: #636366; font-size: 1rem; }
.send-icon {
    width: 28px; height: 28px;
    background: var(--accent-blue);
    border-radius: 50%;
    display: flex; justify-content: center; align-items: center;
    font-weight: bold; color: white;
}

/* Typing Indicator Animation */
.typing-indicator {
    display: flex; gap: 4px; padding: 15px 18px;
    background: var(--bubble-received);
    border-radius: 20px; border-bottom-left-radius: 4px;
    width: fit-content;
}
.dot {
    width: 8px; height: 8px;
    background-color: var(--text-muted);
    border-radius: 50%;
    animation: typing 1.4s infinite ease-in-out both;
}
.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }

/* Keyframes */
@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(255, 154, 158, 0.5); }
    70% { box-shadow: 0 0 0 30px rgba(255, 154, 158, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 154, 158, 0); }
}
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}
@keyframes floatUpwards {
    0% { transform: translateY(10vh) translateX(0) scale(0.8); opacity: 0; }
    10% { opacity: var(--target-opacity); }
    50% { transform: translateY(-50vh) translateX(var(--drift)) scale(1); }
    90% { opacity: var(--target-opacity); }
    100% { transform: translateY(-110vh) translateX(calc(var(--drift) * 1.5)) scale(1.1); opacity: 0; }
}
@keyframes slideUp {
    to { opacity: 1; transform: translateY(0); }
}
@keyframes typing {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
}
