import React from 'react'
import '../style.css'

export default function Body() {
    return (
        <div>
            <section class="hero-section">
                <div class="hero-container">
                    <h1 class="hero-title">Download Click Python Sorter</h1>
                    <p class="hero-subtitle">
                        Python sorter helps you sort all of your downloaded file to designated folders, so that all of your downloaded files are organized and neat .
                    </p>
                    <a href="#get-started" class="hero-button">Download</a>
                </div>
            </section>
            <div class="features-section">
                <div class="features-container">
                    <h2 class="features-title">Features</h2>
                    <div class="features-grid">
                        <div class="features-card">
                            <i class="fas fa-university features-icon"></i>
                            <h3 class="features-card-title">Organize Everything</h3>
                            <p class="features-card-text">
                                with this program organize all of your file type with ease.
                            </p>
                        </div>
                        <div class="features-card">
                            <i class="fas fa-wallet features-icon"></i>
                            <h3 class="features-card-title">Runs in the background</h3>
                            <p class="features-card-text">
                                You dont have to keep running the app, once it runs it runs forever.
                            </p>
                        </div>
                        <div class="features-card">
                            <i class="fas fa-bolt features-icon"></i>
                            <h3 class="features-card-title">Supports all file types</h3>
                            <p class="features-card-text">
                                Supports .mp3 .doc .mp4 .wav .xls etc..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}
