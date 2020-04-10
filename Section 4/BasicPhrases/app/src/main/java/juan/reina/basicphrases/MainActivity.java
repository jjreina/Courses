package juan.reina.basicphrases;

import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void playPhrase(View view) {

        Button buttonPress = (Button) view;
        // Log.i("Button pressed", buttonPress.getTag().toString());
        MediaPlayer mediaPlayer = MediaPlayer.create(this, getResources().getIdentifier(buttonPress.getTag().toString(), "raw", getPackageName()));
        mediaPlayer.start();
    }
}
