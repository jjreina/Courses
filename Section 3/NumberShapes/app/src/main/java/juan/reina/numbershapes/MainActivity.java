package juan.reina.numbershapes;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void testNumber(View v) {

        Log.i("Info", "Button pressed");

        EditText editText = findViewById(R.id.editText);


        String message = editText.getText().toString();

        if (message.isEmpty()) {
            message = "Please enter a number";
        } else {

            Number number = new Number();

            int myNumber = Integer.parseInt(editText.getText().toString());

            if (number.isSquare(myNumber) && number.isTriangular(myNumber)) {
                message = message.concat(" is square and triangular");
            } else if (number.isSquare(myNumber)) {
                message = message.concat(" is square but not triangular");
            } else if (number.isTriangular(myNumber)) {
                message = message.concat(" is triangular but not square");
            } else {
                message = message.concat(" is neither triangular nor square.");
            }
        }

        Toast.makeText(this, message, Toast.LENGTH_LONG).show();
    }
}
