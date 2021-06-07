from time import sleep
total = 30

for perc in range(101):
    num = total * perc //100
    done = ">" * num
    todo = "-" * (total - num)
    print('\r', f'{perc:02}', '% ', done+todo, sep='', end='', flush=True)
    sleep(0.02)