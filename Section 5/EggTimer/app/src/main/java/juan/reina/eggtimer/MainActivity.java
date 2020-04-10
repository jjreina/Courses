package juan.reina.eggtimer;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.CountDownTimer;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.google.android.material.slider.Slider;

import java.util.concurrent.TimeUnit;

public class MainActivity extends AppCompatActivity {

    TextView countdownTextView;
    Slider timerSlider;

    private long[] convertSecondsToMinutesAndSeconds(float seconds) {
        long minutesToShow = TimeUnit.SECONDS.toMinutes((long) seconds);
        long secondsToShow = TimeUnit.SECONDS.toSeconds((long) seconds) - (TimeUnit.SECONDS.toMinutes((long) seconds) * 60);
        long[] result = {minutesToShow, secondsToShow};
        return result;
    }

    private void setUpSlider(Slider timerSlider) {
        timerSlider.setValueFrom(0f);
        timerSlider.setValueTo(600f);
        timerSlider.setStepSize(30f);
        timerSlider.setValue(300f);
    }

    private void initializeCountdownTearView(Slider timerSlider, TextView countdownTextView) {
        String minutes = String.format("%02d", convertSecondsToMinutesAndSeconds(timerSlider.getValue())[0]);
        String seconds = String.format("%02d", convertSecondsToMinutesAndSeconds(timerSlider.getValue())[1]);
        countdownTextView.setText(minutes + ":" + seconds);
    }

    public void buttonClicked(View view) {
        CountDownTimer countDownTimer = new CountDownTimer((long) (timerSlider.getValue() * 1000), 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                long[] secondsToShow = convertSecondsToMinutesAndSeconds(millisUntilFinished / 1000);
                countdownTextView.setText(String.format("%02d",secondsToShow[0]) + ":" + String.format("%02d", secondsToShow[1]));
            }

            @Override
            public void onFinish() {
                Log.i("Finished", "Timer all done");
            }
        }.start();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        timerSlider = findViewById(R.id.timerSlider);
        countdownTextView = findViewById(R.id.countdownTextView);

        setUpSlider(timerSlider);
        initializeCountdownTearView(timerSlider, countdownTextView);

        timerSlider.setOnChangeListener(new Slider.OnChangeListener() {
            @Override
            public void onValueChange(Slider slider, float value) {
                float seconds = slider.getValue();
                long[] secondsToShow = convertSecondsToMinutesAndSeconds(seconds);
                countdownTextView.setText(String.format("%02d", secondsToShow[0]) + ":" + String.format("%02d", secondsToShow[1]));
            }
        });
    }
}
