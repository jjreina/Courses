package juan.reina.connect3game;

import android.support.annotation.StringDef;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;


public class MainActivity extends AppCompatActivity {

    ActivePlayer activePlayer = new ActivePlayer();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void dropIn(View view) {
        Log.i("Info", "Tapped");
        ImageView counter = (ImageView) view;
        counter.setTranslationY(-1500);

        if (activePlayer.getActivePlayerMode() == ActivePlayer.YELLOW) {
            counter.setImageResource(R.drawable.yellow);
            counter.animate().translationYBy(1500).rotation(3600).setDuration(1000);
            activePlayer.setActivePlayerMode(ActivePlayer.RED);
        } else {
            counter.setImageResource(R.drawable.red);
            counter.animate().translationYBy(1500).rotation(3600).setDuration(1000);
            activePlayer.setActivePlayerMode(ActivePlayer.YELLOW);
        }

    }
}
