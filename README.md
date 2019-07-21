 # 🎤 Wu-Tang Name Generator

![Preview](/img/preview.png)

### Goal:

- Create a Wu-Tang Clan name generator (see example in references). Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator). The same inputs should output the same name (ie. non-random).

## Approach:

- Create arrays of first names and last names
- Use String.length to vary the selection from the arrays
- Determine array index of **First Name** using sum of String.length of 1st and 2nd inputs. 
- Determine array index of **Last Name** using sum of String.length of 3rd, 4th, and 5th.


### References:

- http://www.mess.be/inickgenwuname.php
