package juan.reina.animations_1;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    int numberOfTapped = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    protected void animation(View v) {

        Log.i("Info", "Imaged tapped");

        ImageView imageView = findViewById(R.id.imageView);

        Log.i("Info", "Number of tapped " + numberOfTapped);
        if (numberOfTapped == 0) {
            Log.i("Info", "Number of tapped " + numberOfTapped);
            imageView.animate().translationXBy(-1400).setDuration(2000);
            numberOfTapped++;
        } else if (numberOfTapped == 1) {
            Log.i("Info", "Number of tapped " + numberOfTapped);
            imageView.animate().translationXBy(1400).setDuration(2000);
            numberOfTapped++;
        } else if (numberOfTapped == 2) {
            Log.i("Info", "Number of tapped " + numberOfTapped);
            imageView.animate().rotation(1800).alpha(0).setDuration(1000);
            numberOfTapped++;
        } else if (numberOfTapped == 3) {
            Log.i("Info", "Number of tapped " + numberOfTapped);
            imageView.animate().rotation(-1800).alpha(1).setDuration(1000);
            numberOfTapped++;
        } else if (numberOfTapped == 4) {
            Log.i("Info", "Number of tapped " + numberOfTapped);
            imageView.animate().scaleX(0.5f).scaleY(0.5f).setDuration(1000);
            numberOfTapped++;
        } else if (numberOfTapped == 5) {
            Log.i("Info", "Number of tapped " + numberOfTapped);
            imageView.animate().rotation(360).scaleX(1f).scaleY(1f).setDuration(1000);
            numberOfTapped = 0;
        }
    }
}
