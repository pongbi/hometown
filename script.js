// 경로가 모두 수정된 최종 script.js 코드
window.onload = function() {

    const soundData = [
        { 
            id: 'grandma', 
            name: '어르신들의 대화', 
            file: 'grandma.mp3', // 경로 수정
            x: 825,
            y: 110,
            description: `<strong>[이문1동 주민센터 근처]</strong><br>
                          햇살 좋은 오후, 동네 어르신들이 모여 정답게 이야기를 나누는 소리. 
                          느리지만 따뜻한 우리 동네의 시간이 느껴진다.`
        },
        { 
            id: 'market', 
            name: '이경시장', 
            file: 'market.mp3', // 경로 수정
            x: 415, 
            y: 840,
            description: `<strong>[활기 넘치는 이경시장]</strong><br>
                          "골라 골라!" 외치는 상인의 목소리와 흥정하는 손님들의 소리가 어우러져 
                          언제나 생동감이 넘치는 곳이다.`
        },
        { 
            id: 'playground', 
            name: '아파트 놀이터', 
            file: 'playground.mp3', // 경로 수정
            x: 230, 
            y: 490,
            description: `<strong>[중앙하이츠빌 아파트]</strong><br>
                          아이들의 웃음소리와 신나게 뛰어노는 소리가 가득한 곳. 
                          미래의 희망이 자라나는 소중한 소리.`
        },
        { 
            id: 'pigeon', 
            name: '골목길 비둘기', 
            file: 'pigeon.mp3', // 경로 수정
            x: 580,
            y: 350,
            description: `<strong>[외대역동로 26길]</strong><br>
                          조용한 골목길에서 들려오는 비둘기의 '구구' 소리. 
                          무심코 지나쳤던 평범한 일상의 소리가 새롭게 다가온다.`
        }
    ];

    const mapContainer = document.getElementById('map-container');
    const mapImage = document.getElementById('map-image');
    const infoWindow = document.getElementById('info-window');

    let currentAudio = null;

    function initialize() {
        soundData.forEach(pointData => {
            const pointElement = document.createElement('div');
            pointElement.className = 'sound-point';
            
            pointElement.style.left = (pointData.x / mapImage.naturalWidth) * 100 + '%';
            pointElement.style.top = (pointData.y / mapImage.naturalHeight) * 100 + '%';

            pointElement.addEventListener('click', function() {
                if(currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                const audio = new Audio(pointData.file);
                audio.play();
                currentAudio = audio;

                infoWindow.innerHTML = pointData.description;
                infoWindow.style.left = pointElement.style.left;
                infoWindow.style.top = pointElement.style.top;
                infoWindow.classList.add('show');
            });
            
            mapContainer.appendChild(pointElement);
        });
    }

    if (mapImage.complete) {
        initialize();
    } else {
        mapImage.onload = initialize;
    }
};
