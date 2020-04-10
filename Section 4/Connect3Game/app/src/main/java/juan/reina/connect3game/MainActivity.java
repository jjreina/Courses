package juan.reina.connect3game;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.support.v7.widget.GridLayout;
import android.widget.ImageView;
import android.widget.TextView;


import java.util.Arrays;

import static juan.reina.connect3game.ActivePlayer.*;


public class MainActivity extends AppCompatActivity {

    Boolean gameActive = true;
    String[] gameState = new String[]{EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY};
    int[][] winnerPositions = {{0, 1, 2}, {3, 4, 5}, {6, 7, 8},
                              {0, 3, 6}, {1, 4, 7}, {2, 5, 8},
                              {0, 4, 8}, {2, 4, 6}};
    ActivePlayer activePlayer = new ActivePlayer();
    TextView winnerText;
    Button playAgainButton;
    GridLayout gridLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        winnerText = findViewById(R.id.winnerTextView);
        playAgainButton = findViewById(R.id.playAgainButton);
        gridLayout = findViewById(R.id.gridLayout);
    }

    public void dropIn(View view) {

        ImageView counter = (ImageView) view;
        int tappedCounter = Integer.parseInt(counter.getTag().toString());
        if (gameActive && gameState[tappedCounter] == EMPTY) {
            winnerText.setText("Gaming..");
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

            checkWinnerPositions();
        }
    }

    public void playAgain(View view) {
        playAgainButton.setEnabled(true);
        winnerText.setText(R.string.winner_text_view);
        for (int i = 0; i < gridLayout.getChildCount(); i++) {
            ImageView counter = (ImageView) gridLayout.getChildAt(i);
            counter.setImageDrawable(null);
        }
        gameActive = true;
        Arrays.fill(gameState, EMPTY);
        activePlayer.setActivePlayerMode(YELLOW);
        playAgainButton.setEnabled(false);
    }

    private void checkWinnerPositions() {
        for (int[]winnerPosition : winnerPositions) {
            if (gameState[winnerPosition[0]] == gameState[winnerPosition[1]] && gameState[winnerPosition[1]] == gameState[winnerPosition[2]] && gameState[winnerPosition[0]] != EMPTY) {
                String winner = activePlayer.getActivePlayerMode() == YELLOW ? RED : YELLOW;
                gameActive = false;
                playAgainButton.setEnabled(true);
                winnerText.setText(winner.toUpperCase() + " has won!");
            }
        }
    }
}
