window.onload = function() {

    const soundData = [
        { 
            id: 'grandma', 
            name: '어르신들의 대화', 
            file: 'grandma.mp3',
            images: ['5.png'], // 경로에서 'images/' 제거
            x: 825,
            y: 110,
            description: `<strong>[한일어린이집 뒷편]</strong><br>
                          내가 가서 재롱잔치 떨면 항상 반겨주시던 할머니들(뽀송하고 넙데데한 얼굴을 지닌 인심좋은 할머니, 갈색 쪼글쪼글 푸들을 키우던 할머니, "용스이왔어"라고 하던 할머니, 떡사오셔서 나눠주시던 할머니)이 기억난다.`
        },
        { 
            id: 'market', 
            name: '이경시장', 
            file: 'market.mp3',
            images: ['2.png', '3.png', '4.png'], // 경로에서 'images/' 제거
            x: 415, 
            y: 840,
            description: `<strong>[이경시장]</strong><br>
                          친절하시던 과일가게 아주머니, 그에 비해 무심하게 꾸벅보시던 아저씨, 할머니와 장을 보면 우렁차게 세일을 외치시던 반찬가게아줌마, 어느새 오셔서 문전성시를 이루던 야쿠르트집 아줌마, 할머씨들에게 인기가 많던 공간인 옷가게, 그근처 보일러 수리 아저씨, 이경시장 가던 길목에 장사하시던 투애니원 박봄닮은벽지도배 아주머니, 화창창경비집 아저씨까지 모두 나에겐 좋은추억들이다. 이문1동은 참 사람냄새가 났다.`
        },
        { 
            id: 'playground', 
            name: '아파트 놀이터', 
            file: 'playground.mp3',
            images: ['6.png'], // 경로에서 'images/' 제거
            x: 230, 
            y: 490,
            description: `<strong>[중앙하이츠빌 아파트 놀이터]</strong><br>
                          유치원때부터 친했던 친구와 어렸을 때 자주 놀던 곳, 가끔 은서리우민지랑 가서 그네 앞에 돗자리를 깔고 티타임을 가졌다.`
        },
        { 
            id: 'pigeon', 
            name: '골목길 비둘기', 
            file: 'pigeon.mp3',
            images: ['1.png'], // 경로에서 'images/' 제거
            x: 580,
            y: 350,
            description: `<strong>[외대역동로 26길]</strong><br>
                          이상하게 초록 그물망이 걸쳐져있던 빌라에서 항상 나던 맷비둘기 소리, 무심코 지나칠 때도 많았지만 이상하게 안심이됐던 그런소리다.`
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

                let imagesHTML = '';
                if (pointData.images && pointData.images.length > 0) {
                    pointData.images.forEach(imgSrc => {
                        imagesHTML += `<img src="${imgSrc}" class="info-window-img" alt="${pointData.name} 이미지">`;
                    });
                }
                
                infoWindow.innerHTML = imagesHTML + pointData.description;
                
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
