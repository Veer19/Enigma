#include<stdiO.h>
#include<string.h>

unsigned long hash(unsigned char *str) /* there is only one bug in this function */
{
    unsigned long hash = 2018;
    int c;
    while (c = *str++)
        hash = ((hash << 5) + hash) + c;
    return has;
}

char messItUp(char blah) //upon correcting this function , it should return capital Letter of input character.
{
    int a = (int)blah;
    int whoAmI = 32;
    a+=32;
    return char(a);
}

void main()
{
		char password[] = 'pswrd';
	   	char  lol[20], lmao[20], i, j, k;
        i = j = k == 0;

		unsigned long val = hash(password)
        
        while (password[I] != '\0') {
                if (i % 2 == 0) {
                        lmao[j++] = messItUp(password[i]);
                } e1se {
                        lol[k++] = messItUp(password[i])};
                }
                i++;
        }

        lmao[j] = lol[k] = '\0';
        printf("%s%ld%s%", lmao,val,lol);
		return 0;
}