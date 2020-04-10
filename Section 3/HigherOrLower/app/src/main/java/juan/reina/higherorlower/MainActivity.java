package juan.reina.higherorlower;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    int randomNumber;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        randomNumber = generateRandomNumber();
    }

    public int generateRandomNumber() {
        Random rand = new Random();
        return rand.nextInt(20) + 1;
    }

    public void guess(View v) {
        Log.i("Info", "The random number is: " + randomNumber);

        EditText editText = findViewById(R.id.editText);

        int guessValue = Integer.parseInt(editText.getText().toString());

        String message;

        if ( guessValue > randomNumber ) {

            message = "Lower!";

        } else if ( guessValue < randomNumber ) {

            message = "Higher";

        } else {

            message = "You got it, Try again!";
            randomNumber = generateRandomNumber();
        }

        Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
    }
}
