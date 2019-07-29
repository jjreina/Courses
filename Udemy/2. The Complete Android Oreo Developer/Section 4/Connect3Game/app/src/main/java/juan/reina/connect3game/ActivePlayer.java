package juan.reina.connect3game;

import android.support.annotation.StringDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

public class ActivePlayer {

    @Retention(RetentionPolicy.SOURCE)
    @StringDef({
            YELLOW,
            RED
    })
    public @interface ActivePlayerMode {}

    public static final String YELLOW = "yellow";
    public static final String RED = "red";

    @ActivePlayerMode String activePlayer = YELLOW;

    @ActivePlayerMode
    public String getActivePlayerMode() {
        return activePlayer;
    }

    public void setActivePlayerMode(@ActivePlayerMode String activePlayerMode) {
        this.activePlayer = activePlayerMode;
    }
}
