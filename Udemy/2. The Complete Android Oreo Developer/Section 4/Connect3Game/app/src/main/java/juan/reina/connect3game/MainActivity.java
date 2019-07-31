package juan.reina.connect3game;

import android.support.annotation.StringDef;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import java.util.Arrays;

import static juan.reina.connect3game.ActivePlayer.*;


public class MainActivity extends AppCompatActivity {

    String[] gameState = new String[]{EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY};
    int[][] winnerPositions = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8},
                              {0, 3, 6}, {1, 4, 7}, {2, 5, 8},
                              {0, 4, 8}, {2, 4, 6}};
    ActivePlayer activePlayer = new ActivePlayer();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void dropIn(View view) {

        ImageView counter = (ImageView) view;
        // Log.i("Info", "Tapped image: " + counter.getTag().toString());
        int tappedCounter = Integer.parseInt(counter.getTag().toString());
        gameState[tappedCounter] = activePlayer.getActivePlayerMode();

        counter.setTranslationY(-1500);

        if (activePlayer.getActivePlayerMode() == YELLOW) {
            counter.setImageResource(R.drawable.yellow);
            counter.animate().translationYBy(1500).rotation(3600).setDuration(1000);
            activePlayer.setActivePlayerMode(RED);
        } else {
            counter.setImageResource(R.drawable.red);
            counter.animate().translationYBy(1500).rotation(3600).setDuration(1000);
            activePlayer.setActivePlayerMode(YELLOW);
        }

        // Refactor to method
        for (int[]winnerPosition : winnerPositions) {
            if (gameState[winnerPosition[0]] == gameState[winnerPosition[1]] && gameState[winnerPosition[1]] == gameState[winnerPosition[2]] && gameState[winnerPosition[0]] != EMPTY) {
                String winner = activePlayer.getActivePlayerMode() == YELLOW ? RED : YELLOW;
                Toast.makeText(this, winner + " has won!", Toast.LENGTH_SHORT).show();
            }
        }

    }
}
