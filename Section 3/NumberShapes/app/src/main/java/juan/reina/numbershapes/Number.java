package juan.reina.numbershapes;

public class Number {

    public boolean isSquare(int number) {

        double squareNumber = Math.sqrt(number);
        return ( squareNumber == Math.floor(squareNumber) ) ? true : false;

    }

    public boolean isTriangular(int number) {

        int x = 1;
        int triangularNumber = 1;

        while (triangularNumber < number) {
            x++;
            triangularNumber = triangularNumber + x;
        }

        return ( triangularNumber == number ) ? true : false;
    }
}
