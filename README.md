## Polecenia robota

Każde polecenie składa się z aliasu polecenia oraz par parametr-wartość.

    POLECENIE : PARAMETR1 = WARTOSC1 ; PARAMETR2 = WARTOSC2

### Polecenia nastawne

#### SET
Ustawia wartość nastawy:

* LINEAR_UNIT = [ MM | M | PERCENT ]
* ANGULAR_UNIT = [ RAD | DEG | PERCENT ]
* TIME_FORMAT = [ ... ]

### Polecenia wykonawcze

#### MOV
Powoduje wykonanie ruchu. Parametry
* TIME = [ ... ]
* Q1..Q6 = [ ... ]




// Rodzaje poleceń
- jedź do q1,q2,q3,q4,q5,q6 (jednostki: deg, rad, %)
- jedź do x,y,z,a,b,c (IK) (jednostki: mm, m, %)
- zwróć prędkość, pozycje itp.