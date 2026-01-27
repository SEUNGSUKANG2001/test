export const pages = {
    dashboard: {
        id: 'dashboard',
        title: 'Dashboard',
        showLocation: true,
        content: `
            <h2>UX Testing Dashboard</h2>
            <p>Select a phase to test accessibility and usability violations.</p>
            
            <div class="test-section">
                <h3>① First Impression (Analyze)</h3>
                <p>Learnability & Static Control</p>
                <button class="action-btn" onclick="window.router.navigateTo('phase1_analyze')">Start Phase 1</button>
            </div>

            <div class="test-section">
                <h3>② Interaction (Action)</h3>
                <p>Efficiency & Dynamic Safety</p>
                <button class="action-btn" onclick="window.router.navigateTo('phase2_action')">Start Phase 2</button>
            </div>

            <div class="test-section">
                <h3>③ Feedback (Reaction)</h3>
                <p>Responsiveness & Error Reporting</p>
                <button class="action-btn" onclick="window.router.navigateTo('phase3_feedback')">Start Phase 3</button>
            </div>
        `
    },

    // ==========================================
    // Phase 1: First Impression
    // ==========================================
    phase1_analyze: {
        id: 'phase1_analyze',
        title: 'Phase 1: Analyze',
        parent: 'dashboard',
        showLocation: true,
        content: `
            <h2>Phase 1: First Impression</h2>
            
            <div class="test-section">
                <h3>1. Clarity (Contrast & Affordance)</h3>
                <button class="violation-low-contrast-bg">Low Contrast BG</button>
                <button class="violation-low-contrast-text">Low Contrast Text</button>
                <button class="violation-bad-cursor-disabled" disabled>Disabled (Looks Enabled)</button>
            </div>

            <div class="test-section">
                <h3>2. Static Control (No Location)</h3>
                <p>브레드크럼(경로)이 없는 페이지는 사용자를 길을 잃게 만듭니다.</p>
                <button class="action-btn" onclick="window.router.navigateTo('lost_page')">Go to 'No Breadcrumb' Page</button>
            </div>
        `
    },
    lost_page: {
        id: 'lost_page',
        title: 'Lost Page',
        parent: 'phase1_analyze',
        showLocation: false,
        content: `<h3>Breadcrumbs Missing</h3><button onclick="window.router.navigateTo('phase1_analyze')">Back</button>`
    },

    // ==========================================
    // Phase 2: Interaction
    // ==========================================
    phase2_action: {
        id: 'phase2_action',
        title: 'Phase 2: Action',
        parent: 'dashboard',
        showLocation: true,
        content: `
            <h2>Phase 2: Interaction</h2>

            <div class="test-section">
                <h3>1. Efficiency (Deep Navigation)</h3>
                <p>피츠의 법칙: 목표물까지의 거리와 크기가 중요합니다.</p>
                <p>이번 테스트는 <strong>목표물까지 도달하는 거리(단계)</strong>를 극대화했습니다.</p>
                <br>
                <button class="action-btn" onclick="window.router.navigateTo('phase2_depth1')">다단계 작업 시작하기 (Depth 1)</button>
                </div>
            </div>
        `
    },

    // Phase 2 Deep Navigation Pages
    phase2_depth1: {
        id: 'phase2_depth1',
        title: 'Depth 1',
        parent: 'phase2_action',
        showLocation: true,
        content: `
            <h2>Depth 1</h2>
            <p>첫 번째 단계입니다. 목표는 아직 멀었습니다.</p>
            <div style="margin-top: 50px; text-align: right;">
                <button class="action-btn" onclick="window.router.navigateTo('phase2_depth2')">다음 단계로 (Depth 2) ></button>
            </div>
        `
    },
    phase2_depth2: {
        id: 'phase2_depth2',
        title: 'Depth 2',
        parent: 'phase2_depth1', // Nested parent
        showLocation: true,
        content: `
            <h2>Depth 2</h2>
            <p>두 번째 단계입니다. 거의 다 왔을까요?</p>
            <div style="margin-top: 50px; text-align: right;">
                <button class="action-btn" onclick="window.router.navigateTo('phase2_depth3')">다음 단계로 (Depth 3) ></button>
            </div>
        `
    },
    phase2_depth3: {
        id: 'phase2_depth3',
        title: 'Depth 3',
        parent: 'phase2_depth2', // Nested parent
        showLocation: true,
        content: `
            <h2>Depth 3 (Final)</h2>
            <p>드디어 마지막 단계입니다.</p>
            <div style="margin-top: 50px; text-align: center;">
                <button class="action-btn" style="transform: scale(1.5);" onclick="alert('작업 완료!')">★ 목표물 클릭 (완료) ★</button>
            </div>
            <br><br>
            <div style="text-align: center;">
                <button onclick="window.router.navigateTo('phase2_action')">처음으로 돌아가기</button>
            </div>
        `
    },

    // ==========================================
    // Phase 3: Feedback
    // ==========================================
    phase3_feedback: {
        id: 'phase3_feedback',
        title: 'Phase 3: Feedback',
        parent: 'dashboard',
        showLocation: true,
        onEnter: () => {
            // Helper to reset demos
            const resetDemo = (containerSelector) => {
                const container = document.querySelector(containerSelector);
                if (!container) return;

                // Reset text and buttons
                const buttons = container.querySelectorAll('button');
                buttons.forEach(btn => {
                    btn.disabled = false;
                    if (btn.classList.contains('btn-feedback-good')) btn.textContent = 'Process Action';
                    if (btn.id === 'btn-progress') btn.textContent = 'Start Upload';
                });

                // Reset spinners and status
                container.querySelectorAll('.spinner').forEach(el => el.style.display = 'none');
                container.querySelectorAll('.progress-container').forEach(el => el.style.display = 'none');
                container.querySelectorAll('.progress-bar').forEach(el => el.style.width = '0%');
                container.querySelectorAll('.status-msg').forEach(el => {
                    el.textContent = '';
                    el.className = 'status-msg';
                });
            };

            // === 1. Visibility of System Status ===

            // Bad Example: Ambiguous Button
            const btnAmbiguous = document.getElementById('btn-ambiguous');
            if (btnAmbiguous) {
                btnAmbiguous.onclick = () => {
                    // Ghost action behavior
                    // No visual change at all
                    setTimeout(() => {
                        alert('Done (Ambiguous)');
                    }, 2000);
                };
            }

            // Good Example: Clear State
            const btnClear = document.getElementById('btn-clear');
            if (btnClear) {
                btnClear.onclick = () => {
                    const statusMsg = document.getElementById('status-clear');
                    const spinner = document.getElementById('spinner-clear');

                    // 1. Loading State
                    btnClear.disabled = true;
                    btnClear.textContent = 'Processing...';
                    spinner.style.display = 'block';
                    statusMsg.textContent = 'Connecting to server...';

                    // 2. Success State after 2s
                    setTimeout(() => {
                        spinner.style.display = 'none';
                        btnClear.textContent = 'Success!';
                        btnClear.style.backgroundColor = '#28a745';
                        statusMsg.textContent = 'Action Completed Successfully.';
                        statusMsg.classList.add('status-success');

                        // Reset after delay for re-testing
                        setTimeout(() => resetDemo('#demo-section-2'), 3000);
                    }, 2000);
                };
            }


            // === 2. Efficiency & Latency ===

            // Bad Example: Mystery Wait (No Progress)
            const btnMystery = document.getElementById('btn-mystery');
            if (btnMystery) {
                btnMystery.onclick = () => {
                    const spinner = document.getElementById('spinner-mystery');
                    const statusMsg = document.getElementById('status-mystery');

                    btnMystery.disabled = true;
                    // Just a spinner, no idea how long
                    spinner.style.display = 'block';
                    statusMsg.textContent = 'Please wait...';

                    setTimeout(() => {
                        spinner.style.display = 'none';
                        statusMsg.textContent = 'Done.';
                        btnMystery.disabled = false;
                    }, 3000); // 3 seconds of uncertainty
                };
            }

            // Good Example: Progress Bar
            const btnProgress = document.getElementById('btn-progress');
            if (btnProgress) {
                btnProgress.onclick = () => {
                    const progressContainer = document.getElementById('progress-container-real');
                    const progressBar = document.getElementById('progress-bar-real');
                    const statusMsg = document.getElementById('status-progress');

                    btnProgress.disabled = true;
                    progressContainer.style.display = 'block';
                    statusMsg.textContent = 'Uploading...';

                    let width = 0;
                    const interval = setInterval(() => {
                        if (width >= 100) {
                            clearInterval(interval);
                            statusMsg.textContent = 'Upload Complete!';
                            statusMsg.classList.add('status-success');
                            setTimeout(() => {
                                resetDemo('#demo-section-3');
                            }, 2000);
                        } else {
                            width += 2; // Incremental update
                            progressBar.style.width = width + '%';
                            progressBar.textContent = width + '%';
                        }
                    }, 30); // ~1.5s total
                };
            }
        },
        content: `
            <h2>Phase 3: Feedback & Efficiency</h2>
            <p>Immediate feedback reduces uncertainty and perceived latency.</p>

            <!-- 1. Bad (Ambiguous) -->
            <div class="test-section" id="demo-section-1">
                <h3>1. Ambiguous Feedback (Bad)</h3>
                <p>Clicking does not change the button state. Is it working?</p>
                
                <div class="feedback-column" style="max-width: 400px;">
                    <button id="btn-ambiguous" class="btn-feedback-bad">Ambiguous Action</button>
                    <div class="status-msg"></div>
                </div>
            </div>

            <!-- 2. Good (Status) -->
            <div class="test-section" id="demo-section-2">
                <h3>2. Visibility of System Status (Good)</h3>
                <p>Button disables, shows 'Processing...', and confirms success.</p>
                
                <div class="feedback-column" style="max-width: 400px;">
                    <button id="btn-clear" class="btn-feedback-good">Process Action</button>
                    <div class="spinner-area"><div id="spinner-clear" class="spinner"></div></div>
                    <div id="status-clear" class="status-msg"></div>
                </div>
            </div>

            <!-- 3. Good (Progress) -->
            <div class="test-section" id="demo-section-3">
                <h3>3. Progress Indication (Good)</h3>
                <p>For longer tasks, show exactly how much is left.</p>

                <div class="feedback-column" style="max-width: 400px;">
                    <button id="btn-progress" class="btn-feedback-good">Start Upload</button>
                    <div id="progress-container-real" class="progress-container">
                        <div id="progress-bar-real" class="progress-bar">0%</div>
                    </div>
                    <div id="status-progress" class="status-msg"></div>
                </div>
            </div>
        `
    },

}
