document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeFill = document.getElementById('volumeFill');
    const muteBtn = document.getElementById('muteBtn');
    const repeatBtn = document.getElementById('repeatBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const songTitle = document.getElementById('songTitle');
    const artistName = document.getElementById('artistName');
    const albumArt = document.getElementById('albumArt');
    const currentMoodLabel = document.getElementById('currentMoodLabel');
    const vinyl = document.querySelector('.vinyl');
    const moodsGrid = document.querySelector('.moods-grid');
    const playlist = document.getElementById('playlist');

    // Music Data - REPLACE THESE WITH YOUR SONGS
    const moodMusicData = {
        happy: {



            name: "Happy",
            icon: "fas fa-smile-beam",
            color: "#FFD700",
            songs: [
                {
                    title: "mama choodaro",
                    artist: "NARESH IYER",
                    src: "happy/Maama Choodaro - happy1.mp3",
                    cover: "cover/mama choodaro.jpg",
                    duration: "4:30"
                },
                {
                    title: "singarala",
                    artist: "K.J.YESUDAS",
                    src: "happy/02 -  Singarala [www.SenSongsMp3.co].mp3",
                    cover: "cover/singarala.jpg",
                    duration: "5:31"
                },
                {
                    title: "i wanna fly",
                    artist: "REVANTH",
                    src: "happy/I Wanna Fly - SenSongsMp3.Co.mp3",
                    cover: "cover/i wanna fly.jpg",
                    duration: "3:58"
                }
            ]
        },
        sad: {
            name: "Sad",
            icon: "fas fa-sad-tear",
            color: "#6495ED",
            songs: [
                {
                    title: "ADIGA ADIGA",
                    artist: "SID SRIRAM",
                    src: "sad/Adiga Adiga - relaxed3.mp3",
                    cover: "cover/adiga.jpg",
                    duration: "3:44"
                },
                {
                    title: "AMMA AMMA",
                    artist: "S P BALASUBRAMANYAM",
                    src: "sad/Amma Amma(7th sense) - Sad.mp3",
                    cover: "cover/amma.jpg",
                    duration: "6:07"
                },
                {
                    title: "YE MANISHIKE MAJILIYO",
                    artist: "CHINMAYI SRIPAADA",
                    src: "sad/Ye Manishike Majiliyo - Sad1.mp3",
                    cover: "cover/majili.jpg",
                    duration: "4:05"
                }
            ]
        },
        energetic: {
            name: "Energetic",
            icon: "fas fa-bolt",
            color: "#FF4500",
            songs: [
                {
                    title: "JEEVITHAM ANTE PORAATAM",
                    artist: "S P BALASUBRAMANYAM",
                    src: "energetic/05 - Jeevitamante Poraatam - SenSongsMp3.Co.mp3",
                    cover: "cover/jeevitham.jpg",
                    duration: "4:39"
                },
                {
                    title: "CHOOPULTHO",
                    artist: "SHANKAR MAHADEVAN",
                    src: "energetic/Choopultho-SenSongsMp3.Co.mp3",
                    cover: "cover/idiot.avif",
                    duration: "4:33"
                },
                {
                    title: "BEAT IT",
                    artist: "MICHEAL JACKSON",
                    src: "songs/energetic/Micheal_Jackson_-_Beat_It_(mp3.pm).mp3",
                    cover: "cover/beatit.jpg",
                    duration: "4:17"
                }
            ]
        },
        relaxed: {
            name: "Relaxed",
            icon: "fas fa-spa",
            color: "#32CD32",
            songs: [
                {
                    title: "KADALALLE",
                    artist: "SID SRIRAM",
                    src: "relaxed/Kadalalle - relaxed4.mp3",
                    cover: "cover/kadallale.jpg",
                    duration: "4:20"
                },
                {
                    title: "MADHURAME",
                    artist: "SAMEERA BHARADWAJ",
                    src: "relaxed/Madhurame _relaxed1.mp3",
                    cover: "cover/arjun.jpg",
                    duration: "5:43"
                },
                {
                    title: "O VASUMATHI",
                    artist: "YAZIN NIZAR",
                    src: "relaxed/O Vasumathi - relaxed2.mp3",
                    cover: "cover/vasumathi.jpg",
                    duration: "4:33"
                }
            ]
        },
        romantic: {
            name: "Romantic",
            icon: "fas fa-heart",
            color: "#FF69B4",
            songs: [
                {
                    title: "NEE CHOOPULE",
                    artist: "HARI CHARAN",
                    src: "romantic/Nee Choopule - romantic3.mp3",
                    cover: "cover/nee.jpg",
                    duration: "6:02"
                },
                {
                    title: "PANCHADHARA BOMMA",
                    artist: "ANUJ GURWARA",
                    src: "romantic/Panchadhara Bomma-romantic4.mp3",
                    cover: "cover/panch.jpg",
                    duration: "4:47"
                },
                {
                    title: "YEMI CHEYAMANDHUVE",
                    artist: "SHANKAR MAHADEVAN",
                    src: "romantic/01 - Yemi Cheyamanduve - romantic5.mp3",
                    cover: "cover/pri.jpg",
                    duration: "6:00"
                }
                
                
            ]
        },
        focused: {
            name: "Focused",
            icon: "fas fa-brain",
            color: "#9370DB",
            songs: [
                {
                    title: "MERUPAISAGARA",
                    artist: "KARTHIK",
                    src: "focused/Merupisaagara.mp3",
                    cover: "cover/merupaisa.jpg",
                    duration: "4:35"
                },
                {
                    title: "TRAVELLING SOLDIER",
                    artist: "RAMANA GOGULA",
                    src: "focused/Travelling Soldier - SenSongsMp3.Co.mp3",
                    cover: "cover/sol.jpg",
                    duration: "4:28"
                },
                {
                    title: "MARI ANTAGA",
                    artist: "SREERAMA CHANDRA",
                    src: "focused/Mari Antaga-SenSongsMp3.Co.mp3",
                    cover: "cover/mari.jpg",
                    duration: "3:47"
                }
            ]
        }
    };

    // Player State
    let currentMood = null;
    let currentPlaylist = [];
    let currentSongIndex = 0;
    let isPlaying = false;
    let isMuted = false;
    let isShuffle = false;
    let repeatMode = 'off'; // 'off', 'all', 'one'
    let shuffleHistory = [];
    let originalPlaylistOrder = [];
    let lastVolume = 70;

    // Initialize
    createMoodCards();
    initVolume();
    loadSavedSettings();

    // ========== MOOD CARDS ==========
    function createMoodCards() {
        for (const [key, mood] of Object.entries(moodMusicData)) {
            const moodCard = document.createElement('div');
            moodCard.className = 'mood-card';
            moodCard.dataset.mood = key;
            moodCard.innerHTML = `
                <i class="${mood.icon} mood-icon" style="color: ${mood.color}"></i>
                <h4>${mood.name}</h4>
                <p>${mood.songs.length} songs to match your vibe</p>
            `;
            
            moodCard.addEventListener('click', () => selectMood(key));
            moodsGrid.appendChild(moodCard);
        }
    }

    // ========== SELECT MOOD ==========
    function selectMood(moodKey) {
        const mood = moodMusicData[moodKey];
        currentMood = moodKey;
        currentPlaylist = [...mood.songs];
        currentSongIndex = 0;
        
        // Reset shuffle if active
        if (isShuffle) {
            toggleShuffle(); // Turn off shuffle for new mood
        }

        // Update UI
        document.querySelectorAll('.mood-card').forEach(card => {
            card.classList.remove('active');
            if (card.dataset.mood === moodKey) {
                card.classList.add('active');
            }
        });

        // Update mood label
        currentMoodLabel.textContent = mood.name;
        currentMoodLabel.style.background = `linear-gradient(45deg, ${mood.color}, ${adjustColor(mood.color, -20)})`;

        // Load first song
        loadSong(currentSongIndex);

        // Update playlist display
        updatePlaylist();

        // Auto-play
        setTimeout(() => {
            playSong();
        }, 500);

        // Animate mood selection
        const activeCard = document.querySelector(`[data-mood="${moodKey}"]`);
        activeCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            activeCard.style.transform = 'scale(1)';
        }, 200);
    }

    // ========== SONG CONTROL FUNCTIONS ==========
    function loadSong(index) {
        if (!currentPlaylist[index]) return;
        
        const song = currentPlaylist[index];
        
        // Set audio source
        audioPlayer.src = song.src;
        
        // Update UI
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        albumArt.src = song.cover;
        albumArt.alt = `${song.title} cover`;
        
        // Update active playlist item
        document.querySelectorAll('.playlist-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        // Reset progress bar
        progress.style.width = '0%';
        currentTimeEl.textContent = '0:00';
        
        // Set duration once metadata is loaded
        audioPlayer.addEventListener('loadedmetadata', function() {
            durationEl.textContent = formatTime(audioPlayer.duration);
        }, { once: true });
    }

    function playSong() {
        if (currentPlaylist.length === 0) return;
        
        isPlaying = true;
        audioPlayer.play().catch(e => {
            console.log("Playback error:", e);
            // If audio fails, try next song after 1 second
            setTimeout(() => nextSong(), 1000);
        });
        playIcon.className = 'fas fa-pause';
        playBtn.classList.add('playing');
        vinyl.classList.add('playing');
        document.querySelector('.visualizer').style.opacity = '1';
    }

    function pauseSong() {
        isPlaying = false;
        audioPlayer.pause();
        playIcon.className = 'fas fa-play';
        playBtn.classList.remove('playing');
        vinyl.classList.remove('playing');
        document.querySelector('.visualizer').style.opacity = '0.5';
    }

    function nextSong() {
        if (currentPlaylist.length === 0) return;
        
        if (isShuffle) {
            // Pick random song
            let availableIndices = [];
            for (let i = 0; i < currentPlaylist.length; i++) {
                if (i !== currentSongIndex) availableIndices.push(i);
            }
            
            if (availableIndices.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableIndices.length);
                currentSongIndex = availableIndices[randomIndex];
            } else {
                currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
            }
        } else {
            // Normal sequential
            currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
        }
        
        loadSong(currentSongIndex);
        if (isPlaying) playSong();
    }

    function prevSong() {
        if (currentPlaylist.length === 0) return;
        
        if (isShuffle) {
            // Pick random previous song
            let availableIndices = [];
            for (let i = 0; i < currentPlaylist.length; i++) {
                if (i !== currentSongIndex) availableIndices.push(i);
            }
            
            if (availableIndices.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableIndices.length);
                currentSongIndex = availableIndices[randomIndex];
            } else {
                currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
            }
        } else {
            // Normal sequential
            currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        }
        
        loadSong(currentSongIndex);
        if (isPlaying) playSong();
    }

    // ========== PLAYLIST DISPLAY ==========
    function updatePlaylist() {
        playlist.innerHTML = '';
        
        if (currentPlaylist.length === 0) {
            playlist.innerHTML = '<p class="empty-playlist">Select a mood to load songs</p>';
            return;
        }
        
        currentPlaylist.forEach((song, index) => {
            const playlistItem = document.createElement('div');
            playlistItem.className = `playlist-item ${index === currentSongIndex ? 'active' : ''}`;
            playlistItem.dataset.index = index;
            
            playlistItem.innerHTML = `
                <img src="${song.cover}" alt="${song.title}">
                <div class="playlist-info">
                    <h5>${song.title}</h5>
                    <p>${song.artist}</p>
                </div>
                <span class="playlist-duration">${song.duration}</span>
            `;
            
            playlistItem.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(index);
                if (isPlaying) playSong();
            });
            
            playlist.appendChild(playlistItem);
        });
    }

    // ========== PROGRESS BAR ==========
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        // Update time display
        currentTimeEl.textContent = formatTime(currentTime);
        if (duration && !isNaN(duration)) {
            durationEl.textContent = formatTime(duration);
        }
    }

    function setProgress(e) {
        if (!audioPlayer.duration) return;
        
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        
        audioPlayer.currentTime = (clickX / width) * duration;
    }

    // ========== VOLUME CONTROL ==========
    function initVolume() {
        const savedVolume = localStorage.getItem('moodTunesVolume');
        if (savedVolume) {
            volumeSlider.value = savedVolume;
            audioPlayer.volume = savedVolume / 100;
            volumeFill.style.width = `${savedVolume}%`;
            lastVolume = parseInt(savedVolume);
        }
        updateVolumeIcon();
    }

    function updateVolume() {
        const volume = volumeSlider.value;
        audioPlayer.volume = volume / 100;
        volumeFill.style.width = `${volume}%`;
        
        // Save volume
        localStorage.setItem('moodTunesVolume', volume);
        lastVolume = parseInt(volume);
        
        // Update icon
        updateVolumeIcon();
    }

    function updateVolumeIcon() {
        const volume = volumeSlider.value;
        const icon = muteBtn.querySelector('i');
        
        if (isMuted || volume == 0) {
            icon.className = 'fas fa-volume-mute';
            muteBtn.title = 'Unmute';
        } else if (volume < 30) {
            icon.className = 'fas fa-volume-off';
            muteBtn.title = `Volume: ${volume}%`;
        } else if (volume < 70) {
            icon.className = 'fas fa-volume-down';
            muteBtn.title = `Volume: ${volume}%`;
        } else {
            icon.className = 'fas fa-volume-up';
            muteBtn.title = `Volume: ${volume}%`;
        }
    }

    function toggleMute() {
        isMuted = !isMuted;
        
        if (isMuted) {
            // Store current volume before muting
            lastVolume = volumeSlider.value;
            audioPlayer.volume = 0;
            volumeFill.style.width = '0%';
            volumeSlider.value = 0;
        } else {
            // Restore volume
            audioPlayer.volume = lastVolume / 100;
            volumeFill.style.width = `${lastVolume}%`;
            volumeSlider.value = lastVolume;
        }
        
        updateVolumeIcon();
    }

    // ========== REPEAT FUNCTION ==========
    function toggleRepeat() {
        const modes = ['off', 'all', 'one'];
        const currentIndex = modes.indexOf(repeatMode);
        repeatMode = modes[(currentIndex + 1) % modes.length];
        
        // Update UI
        repeatBtn.classList.toggle('active', repeatMode !== 'off');
        repeatBtn.classList.toggle('repeat-one', repeatMode === 'one');
        repeatBtn.title = `Repeat: ${repeatMode.charAt(0).toUpperCase() + repeatMode.slice(1)}`;
        
        // Save to localStorage
        localStorage.setItem('moodTunesRepeat', repeatMode);
    }

    // ========== SHUFFLE FUNCTION ==========
    function toggleShuffle() {
        isShuffle = !isShuffle;
        
        if (isShuffle) {
            // Turn shuffle ON
            shuffleBtn.classList.add('active');
            shuffleBtn.title = "Shuffle: ON";
            
            // If we have songs, shuffle them
            if (currentPlaylist.length > 0) {
                // Save original order
                originalPlaylistOrder = [...currentPlaylist];
                
                // Get current song
                const currentSong = currentPlaylist[currentSongIndex];
                
                // Shuffle array (Fisher-Yates algorithm)
                for (let i = currentPlaylist.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [currentPlaylist[i], currentPlaylist[j]] = [currentPlaylist[j], currentPlaylist[i]];
                }
                
                // Find current song in shuffled array
                const newIndex = currentPlaylist.findIndex(song => 
                    song.title === currentSong.title && song.artist === currentSong.artist
                );
                currentSongIndex = newIndex !== -1 ? newIndex : 0;
                
                updatePlaylist();
            }
        } else {
            // Turn shuffle OFF
            shuffleBtn.classList.remove('active');
            shuffleBtn.title = "Shuffle: OFF";
            
            // Restore original order if available
            if (originalPlaylistOrder.length > 0) {
                const currentSong = currentPlaylist[currentSongIndex];
                currentPlaylist = [...originalPlaylistOrder];
                const newIndex = currentPlaylist.findIndex(song => 
                    song.title === currentSong.title && song.artist === currentSong.artist
                );
                currentSongIndex = newIndex !== -1 ? newIndex : currentSongIndex;
                updatePlaylist();
            }
        }
        
        localStorage.setItem('moodTunesShuffle', isShuffle);
    }

    // ========== UTILITY FUNCTIONS ==========
    function formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function adjustColor(color, amount) {
        // Remove # if present
        color = color.replace('#', '');
        
        // Convert to RGB
        let r = parseInt(color.substr(0, 2), 16);
        let g = parseInt(color.substr(2, 2), 16);
        let b = parseInt(color.substr(4, 2), 16);
        
        // Adjust color
        r = Math.max(0, Math.min(255, r + amount));
        g = Math.max(0, Math.min(255, g + amount));
        b = Math.max(0, Math.min(255, b + amount));
        
        // Convert back to hex
        return '#' + 
            (r < 16 ? '0' : '') + r.toString(16) +
            (g < 16 ? '0' : '') + g.toString(16) +
            (b < 16 ? '0' : '') + b.toString(16);
    }

    function loadSavedSettings() {
        // Load repeat state
        const savedRepeat = localStorage.getItem('moodTunesRepeat');
        if (savedRepeat) {
            repeatMode = savedRepeat;
            repeatBtn.classList.toggle('active', repeatMode !== 'off');
            repeatBtn.classList.toggle('repeat-one', repeatMode === 'one');
            repeatBtn.title = `Repeat: ${repeatMode.charAt(0).toUpperCase() + repeatMode.slice(1)}`;
        }
        
        // Load shuffle state
        const savedShuffle = localStorage.getItem('moodTunesShuffle');
        if (savedShuffle === 'true') {
            isShuffle = true;
            shuffleBtn.classList.add('active');
            shuffleBtn.title = "Shuffle: ON";
        }
    }

    // ========== EVENT LISTENERS ==========
    playBtn.addEventListener('click', () => {
        if (currentPlaylist.length === 0) {
            selectMood('happy'); // Default mood if none selected
            return;
        }
        
        isPlaying ? pauseSong() : playSong();
    });

    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);

    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', function() {
        if (repeatMode === 'one') {
            // Repeat same song
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else if (repeatMode === 'all') {
            // Go to next song
            nextSong();
        } else {
            // Normal behavior
            nextSong();
        }
    });

    progressBar.addEventListener('click', setProgress);

    // Volume Events
    volumeSlider.addEventListener('input', updateVolume);
    muteBtn.addEventListener('click', toggleMute);

    // Repeat & Shuffle Events
    repeatBtn.addEventListener('click', toggleRepeat);
    shuffleBtn.addEventListener('click', toggleShuffle);

    // ========== KEYBOARD CONTROLS ==========
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                if (currentPlaylist.length > 0) {
                    isPlaying ? pauseSong() : playSong();
                } else {
                    selectMood('happy');
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (currentPlaylist.length > 0) nextSong();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (currentPlaylist.length > 0) prevSong();
                break;
            case 'ArrowUp':
                e.preventDefault();
                volumeSlider.value = Math.min(100, parseInt(volumeSlider.value) + 10);
                updateVolume();
                break;
            case 'ArrowDown':
                e.preventDefault();
                volumeSlider.value = Math.max(0, parseInt(volumeSlider.value) - 10);
                updateVolume();
                break;
            case 'KeyM':
                e.preventDefault();
                toggleMute();
                break;
            case 'KeyR':
                e.preventDefault();
                toggleRepeat();
                break;
            case 'KeyS':
                e.preventDefault();
                toggleShuffle();
                break;
        }
    });

    // ========== INITIAL AUTOPLAY ==========
    setTimeout(() => {
        selectMood('happy');
    }, 1000);

    // ========== ADD CSS FOR EMPTY PLAYLIST ==========
    const style = document.createElement('style');
    style.textContent = `
        .empty-playlist {
            text-align: center;
            padding: 40px;
            opacity: 0.7;
            font-style: italic;
        }
    `;
    document.head.appendChild(style);

});
