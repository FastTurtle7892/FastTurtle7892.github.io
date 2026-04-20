const projectData = {
    project1: {
        title: "고정밀 UWB 위상 오차 보정 시스템",
        date: "2024.09 ~ 2025.02",
        institution: "논문 게재 · 전자파학회 제 5회 동상",
        overview: "UWB(초광대역) 통신의 단일 주파수 채널에서 I/Q 데이터로부터 위상 정보를 복원하여 DS-TWR의 거리 측정 오차를 기존 수 cm에서 1cm 이하로 개선한 고정밀 실시간 측위 시스템(RTLS).",
        tech: ["C (Embedded)", "Nordic nRF52840", "Qorvo DW3000", "ROS 2", "Python", "Pygame", "OpenCV", "Kalman Filter"],
        schedule: "2024.09 ~ 2025.02",
        member: "5인 팀 (장윤석, 배윤수, 박효준, 정현우, 한수민, 장병준)",
        role: "위상 복원 알고리즘 설계 및 구현, 거리 보정 수식 도출, 필터링 파이프라인 구축 (제 1저자)",
        features: [
            "I/Q 데이터 기반 위상 복원 (Phase Recovery) 알고리즘",
            "DS-TWR 거리값과 위상 정보 융합으로 1cm 이하 정확도 달성",
            "파장 모호성(Ambiguity) 해결을 통한 안정적 거리 보정",
            "Median + Kalman 이중 필터로 좌표 노이즈 제거",
            "ROS 2 기반 다중 앵커(4개) 실시간 데이터 수집 및 시각화",
            "Python Pygame 기반 인터랙티브 위치 시각화 게임 구현"
        ],
        paper: "한국전자파학회논문지 36.8 (2025): 749-756",
        demo: "https://www.youtube.com/watch?v=zzRW9kg5rdE"
    },
    project2: {
        title: "AoA 기반 단일 앵커 UWB RTLS",
        date: "2024.01 ~ 2024.02",
        institution: "전자파학회 제 4회 동상",
        overview: "기존 삼각측량 방식이 최소 3개 이상의 앵커를 요구하는 것과 달리, DS-TWR 기반 거리 측정과 AoA(Angle of Arrival) 기반 각도 추정을 융합하여 단 1개의 앵커만으로 실시간 2D 위치 추적을 구현.",
        tech: ["C (Embedded)", "Nordic nRF52840", "Qorvo DW3110", "XR-170 안테나", "MATLAB", "IEEE 802.15.4z"],
        schedule: "2024.01 ~ 2024.02",
        member: "팀 프로젝트",
        role: "DS-TWR + AoA 융합 알고리즘 설계, 펌웨어 구현, MATLAB 실시간 시각화 개발",
        features: [
            "DS-TWR(Double-Sided Two-Way Ranging)으로 정밀 거리 R 측정",
            "안테나 배열 위상차(Δφ) 기반 AoA 각도 θ 추정",
            "거리 R + 각도 θ 융합으로 2D 좌표 실시간 산출",
            "XR-170 고지향성 안테나를 활용한 AoA 정확도 향상",
            "MATLAB UART 기반 실시간 위치 시각화",
            "Kalman Filter 적용으로 Y축 오차 보정"
        ],
        images: [
            { src: "assets/img/aoa_system.png", caption: "AoA 기반 단일 앵커 RTLS 시스템 구성" },
            { src: "assets/img/aoa_experiment.png", caption: "하드웨어 실험 환경" },
            { src: "assets/img/aoa_result.png", caption: "실험 결과 — 실시간 위치 추적" }
        ],
        demo: "https://www.youtube.com/watch?v=SgOs7Dkw7NQ"
    },
    project3: {
        title: "IEEE 802.15.4z UWB 거리측정 성능 최적화",
        date: "2025.03",
        institution: "논문 게재",
        overview: "UWB IC(Qorvo DW3000)의 실제 하드웨어 처리 시간과 PHY 파라미터(프리앰블 길이 등)에 따른 패킷 길이를 정밀 분석하여, SS-TWR의 거리 오차를 방지하고 DS-TWR의 측정 횟수를 극대화하는 최적 시간 파라미터 선정 방법을 제안.",
        tech: ["C (Embedded)", "Nordic nRF52840", "Qorvo DW3000", "MATLAB", "IEEE 802.15.4z", "SS-TWR", "DS-TWR"],
        schedule: "2025.03",
        member: "팀 프로젝트",
        role: "TWR 프로토콜 분석, 하드웨어 처리 시간 측정, 최적 파라미터 계산 방법론 개발 및 검증",
        features: [
            "UWB IC 하드웨어 처리 시간(Treply_min) 정밀 측정 및 모델링",
            "PHY 파라미터(프리앰블 길이)에 따른 패킷 시간 자동 계산 공식 도출",
            "SS-TWR: Treply ≥ Treply_min 조건 미충족 시 오차 급증 현상 규명",
            "DS-TWR: 최적 Treply 설정으로 단위 시간 내 측정 횟수 극대화",
            "MATLAB 시뮬레이션 + 실제 하드웨어 검증으로 이론·실험 일치 확인",
            "Preamble 128 vs 1024 설정별 성능 비교 분석"
        ],
        images: [
            { src: "assets/img/ranging_overview.png", caption: "UWB 거리측정 시스템 개요" },
            { src: "assets/img/ranging_result.png", caption: "SS-TWR Treply 최적화 실험 결과" }
        ],
        paper: "한국전자파학회논문지 36.3 (2025): 274-282"
    },
    project4: {
        title: "RobotPal — JETANK 로봇팔 가상 시뮬레이터",
        date: "2025.11 ~ 2025.12",
        institution: "팀 프로젝트 · C++ / Cross-Platform",
        overview: "JETANK 로봇팔의 훈련·테스트를 위한 크로스플랫폼 가상 시뮬레이션 환경. 현실 세계에서의 물리적 제약·안전 문제를 가상 환경으로 해결하고, Emscripten을 통해 웹 브라우저에서도 동일하게 구동되는 것이 특징. 담당 파트는 네트워크 계층 추상화 설계와 싱글 스레드 구조를 멀티 스레드로 전환하는 리팩토링.",
        tech: ["C++", "CMake", "Emscripten / WebAssembly", "flecs ECS", "WebSocket", "TCP", "OpenGL", "ImGui", "std::thread"],
        schedule: "2025.11 ~ 2025.12",
        member: "팀 프로젝트",
        role: "네트워크 계층 추상화 설계 (TCP / WebSocket 다형성 구조), 싱글 스레드 → 멀티 스레드 리팩토링 (Thread-safe 수신 큐 구현)",
        features: [
            "NetworkTransport 추상 인터페이스 설계 — TcpNetworkTransport / WebSocketTransport 구현체 다형성 적용",
            "NetworkTransport::Create() 팩토리 패턴으로 런타임에 전송 방식 교체 가능한 구조",
            "NetworkQueue (Thread-safe lock-free 큐)로 네트워크 스레드 ↔ 게임 루프 스레드 데이터 전달",
            "기존 싱글 스레드 구조에서 수신 대기 시 발생하던 프레임 드롭 문제를 전용 네트워크 스레드 분리로 해결",
            "NetworkEngine이 flecs ECS 월드에 ConnectionStatus 컴포넌트로 연결 상태를 등록·관리",
            "Emscripten 빌드 지원으로 Windows / Linux / macOS / Web 모두 동일 코드베이스로 배포"
        ],
        demo: "https://fastturtle7892.github.io/RobotPal/"
    },
    project5: {
        title: "스마트 토잉카 관제 시스템",
        date: "2026.01 ~ 2026.02",
        institution: "팀 프로젝트 · 임베디드 / 자율주행",
        overview: "공항 내 항공기 견인 작업을 자동화하는 통합 관제 플랫폼. 관제탑(Web), 자율주행 토잉카(Jetson Orin), STM32 하드웨어, AI 비전으로 구성. 담당 파트는 임베디드 전반 — STM32 FreeRTOS 멀티태스크 FSM 설계 및 Jetson Orin ROS2 제어. A-star 경로 계획(PathPlanner)과 STM32 하드웨어 드라이버 일부는 별도 담당자가 구현.",
        tech: ["C (STM32)", "FreeRTOS / CMSIS-OS", "Python", "ROS2 (rclcpp)", "Jetson Orin", "UART", "MQTT", "DC Motor / Servo"],
        schedule: "2026.01 ~ 2026.02",
        member: "팀 프로젝트 (Frontend · Backend · Embedded · AI 파트 분담)",
        role: "임베디드 파트 전담 — STM32 FreeRTOS 멀티태스크 FSM 구조 설계 (controlTask / safetyTask / dockTask / uartRxTask), Jetson Orin ROS2 노드 제어. A-star 알고리즘, STM32 기본 HAL 드라이버는 미담당.",
        features: [
            "STM32 FreeRTOS 기반 멀티태스크 아키텍처 — controlTask / safetyTask / dockTask / uartRxTask 독립 실행",
            "FSM(Finite State Machine) 패턴 — safetyTask: OK / TIMEOUT / ESTOP / DISABLED 4가지 상태로 안전 우선 전환",
            "safetyTask HardStop: 모터 즉시 정지 + 도킹 암 안전 자세 복귀 원자적 처리",
            "dockTask FSM: FLAG_DOCK_START / FLAG_DOCK_ABORT 플래그 기반 도킹 시퀀스 상태 전이",
            "controlTask: osMessageQueue 기반 명령 큐로 실시간 속도·조향 업데이트 및 타임아웃 감지",
            "Jetson Orin ROS2 노드(orin_car)로 LiDAR 센서 데이터 처리 및 상위 자율주행 제어 담당"
        ]
    },
    project6: {
        title: "NETS — 장비 불량 데이터 자동 재분류 (RAG)",
        date: "2026.02 ~ 2026.04",
        institution: "삼성전자 네트워크 사업부 연계 · AI / MSA",
        overview: "기지국 장비의 수리(RMA) 데이터 중 '기타', '기타 불량' 등 분류가 모호한 증상을 과거 정상 분류 데이터 기반으로 자동 재분류하는 RAG 파이프라인. 순수 벡터 검색의 한계를 극복하기 위해 하이브리드 검색(BM25 + Milvus)과 LLM Judge를 결합, 할루시네이션을 최소화. 담당 파트는 reclassify 모듈 전담 설계 및 구현.",
        tech: ["Python", "FastAPI", "Milvus (Vector DB)", "BM25", "LangChain", "Ollama (LLM)", "Cross-Encoder", "SQLite", "Docker"],
        schedule: "2026.02 ~ 2026.04",
        member: "삼성전자 네트워크 사업부 연계 팀 프로젝트 (Frontend · Backend · AI 파트 분담)",
        role: "reclassify 모듈 전담 — 하이브리드 검색 파이프라인(BM25 + Milvus) 설계, RRF / CC 스코어 결합 구현, Cross-Encoder Re-ranker 플러그인 구조 설계, LLM Judge 재분류 로직 구현",
        features: [
            "하이브리드 검색: Milvus 벡터 DB(임베딩 유사도) + BM25(키워드) 동시 검색으로 단순 벡터 검색의 누락 보완",
            "RRF(Reciprocal Rank Fusion): 벡터·키워드 결과 순위에 페널티를 적용해 수학적으로 합산 (기본 모드, 고속)",
            "CC(Convex Combination): 거리/유사도 값을 0~1 정규화 후 가중합 (RRF 대비 점수 분포 차별화)",
            "Cross-Encoder Re-ranker 플러그인 구조 — rrf_reranker / cc_reranker 모드로 On/Off 전환, 상위 30건 딥러닝 정밀 재채점",
            "LLM Judge: 노이즈 필터링(1차 Python 차단) 후 정제된 상위 5개 후보를 LLM이 분석해 최종 카테고리 1건 추출",
            "FastAPI + SQLite로 재분류 이력 영구 기록 및 관리자 승인 워크플로 구현"
        ]
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-button');
    const projectCards = document.querySelectorAll('.project-card');

    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalBody = document.getElementById('modal-body');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-id');
            const data = projectData[projectId];

            if (data) {
                modalTitle.textContent = data.title;
                modalDate.textContent = `${data.institution} | ${data.date}`;

                // Images section
                let imagesSection = '';
                if (data.images && data.images.length > 0) {
                    const imgsHtml = data.images.map(img => `
                        <div style="margin-bottom: 16px;">
                            <img src="${img.src}" alt="${img.caption}" class="architecture-image">
                            <p class="image-caption">${img.caption}</p>
                        </div>
                    `).join('');
                    imagesSection = `
                        <div class="project-detail-section">
                            <h4>실험 / 시스템 이미지</h4>
                            ${imgsHtml}
                        </div>
                    `;
                }

                // Paper section
                let paperSection = '';
                if (data.paper) {
                    paperSection = `
                        <div class="project-detail-section">
                            <h4>관련 논문</h4>
                            <p style="font-size:0.92rem; color: #444;">${data.paper}</p>
                        </div>
                    `;
                }

                // Demo section
                let demoSection = '';
                if (data.demo) {
                    demoSection = `
                        <div class="project-detail-section">
                            <h4>데모 영상</h4>
                            <a href="${data.demo}" target="_blank" class="demo-link">
                                ▶ YouTube 데모 보기
                            </a>
                        </div>
                    `;
                }

                const featuresHtml = data.features
                    ? data.features.map(f => `<li>${f}</li>`).join('')
                    : '';

                const techHtml = data.tech
                    ? data.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')
                    : '';

                const contentHtml = `
                    <div class="project-detail-section">
                        <h4>프로젝트 개요</h4>
                        <p style="line-height:1.8;">${data.overview}</p>
                    </div>

                    <div class="project-meta-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px;">
                        <div class="meta-item">
                            <h4>기간</h4>
                            <p>${data.schedule}</p>
                        </div>
                        <div class="meta-item">
                            <h4>인원</h4>
                            <p>${data.member}</p>
                        </div>
                    </div>

                    <div class="project-detail-section">
                        <h4>역할 / 기여</h4>
                        <p>${data.role}</p>
                    </div>

                    <div class="project-detail-section">
                        <h4>주요 구현 내용</h4>
                        <ul class="feature-list">
                            ${featuresHtml}
                        </ul>
                    </div>

                    <div class="project-detail-section">
                        <h4>사용 기술</h4>
                        <div class="skills-container">
                            ${techHtml}
                        </div>
                    </div>

                    ${imagesSection}
                    ${paperSection}
                    ${demoSection}
                `;

                modalBody.innerHTML = contentHtml;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';

                // Add zoom to images
                const archImgs = modalBody.querySelectorAll('.architecture-image');
                archImgs.forEach(img => {
                    img.addEventListener('click', () => {
                        const zoomModal = document.getElementById('image-zoom-modal');
                        const zoomImg = document.getElementById('zoomed-image');
                        zoomImg.src = img.src;
                        zoomModal.style.display = 'flex';
                    });
                });
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Image Zoom Modal
    const zoomModal = document.getElementById('image-zoom-modal');
    if (zoomModal) {
        const closeZoomBtn = document.querySelector('.close-zoom-button');
        closeZoomBtn.addEventListener('click', () => {
            zoomModal.style.display = 'none';
        });
        zoomModal.addEventListener('click', (event) => {
            if (event.target === zoomModal) {
                zoomModal.style.display = 'none';
            }
        });
    }
});

