package juan.reina.sounddemoextend;

import android.media.AudioManager;
import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.SeekBar;

import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends AppCompatActivity {

    private MediaPlayer mediaPlayer;
    private AudioManager audioManager;
    private SeekBar volumeControl;
    private SeekBar scrubSeekBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mediaPlayer = MediaPlayer.create(this, R.raw.sheeran);
        audioManager = (AudioManager) getSystemService(AUDIO_SERVICE);

        configureVolumeSeekBar();
        manageVolumeSeekBar();

        configureScrubSeekBar();
        manageScrubSeekBar();
        updateScrubSeekBar();
    }

    private void configureVolumeSeekBar() {
        int maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
        int currentVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC);

        volumeControl = findViewById(R.id.volumeSeekBar);
        volumeControl.setMax(maxVolume);
        volumeControl.setProgress(currentVolume);
    }

    private void manageVolumeSeekBar() {
        volumeControl.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, progress, 0);
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });
    }

    private void configureScrubSeekBar() {
        scrubSeekBar = findViewById(R.id.scrubSeekBar);
        scrubSeekBar.setMax(mediaPlayer.getDuration());
    }

    private void manageScrubSeekBar() {
        scrubSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {

            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                if (mediaPlayer != null) {
                    mediaPlayer.seekTo(seekBar.getProgress());
                }
            }
        });
    }

    private void updateScrubSeekBar() {
        new Timer().scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                if (mediaPlayer != null) {
                    scrubSeekBar.setProgress(mediaPlayer.getCurrentPosition());
                }
            }
        }, 0, 300);
    }

    public void play(View view) {
        if (mediaPlayer == null) {
            mediaPlayer = MediaPlayer.create(this, R.raw.sheeran);
            mediaPlayer.seekTo(scrubSeekBar.getProgress());
        }
        mediaPlayer.start();
    }

    public void pause(View view) {
        if (mediaPlayer != null) {
            if (mediaPlayer.isPlaying()) {
                mediaPlayer.pause();
            }
        }
    }

    public void stop(View view) {
        if (mediaPlayer != null) {
            mediaPlayer.stop();
            mediaPlayer.release();
            mediaPlayer = null;
            scrubSeekBar.setProgress(0);
        }
    }
}
