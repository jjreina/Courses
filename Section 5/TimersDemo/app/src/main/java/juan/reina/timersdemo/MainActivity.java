package juan.reina.timersdemo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.CountDownTimer;
import android.os.Handler;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    int count = 10;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // First way
        /*
        final Handler handler = new Handler();
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                Log.i("Hello", "A second passed by");
                handler.postDelayed(this, 1000);
            }
        };
        handler.post(runnable);
        */


        // Second way
        new CountDownTimer(10000, 1000) {
            MainActivity mainActivity;
            @Override
            public void onTick(long millisUntilFinished) {
                Log.i("The countdown is: ", String.valueOf(count));
                count--;
            }

            @Override
            public void onFinish() {
                Log.i("The countdown finished:", String.valueOf(count));
            }
        }.start();
    }
}
