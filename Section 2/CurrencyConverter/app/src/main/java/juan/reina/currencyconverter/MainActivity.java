package juan.reina.currencyconverter;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    double FACTOR_TO_DOLLAR = 1.3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void convertCurrency(View v) {
        Log.i("Info", "Button pressed!!");

        EditText editText = findViewById(R.id.editText);

        String amountInPounds = editText.getText().toString();

        String amountInDollars =  String.format("%.2f", (Double.parseDouble(amountInPounds) * FACTOR_TO_DOLLAR));

        Log.i("Amount in Dollars", amountInDollars);

        Toast.makeText(this, "£" + amountInPounds + " is $" + amountInDollars, Toast.LENGTH_LONG).show();

    }
}
