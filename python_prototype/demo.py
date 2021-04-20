from luminators import *

def poll_side(min,max_exclusive):
    side = -1
    while not (min <= side < max_exclusive):
        side_str = input("side? (0..{}) : ".format(max_exclusive-1))
        try:
            side = int(side_str)
        except:
            print("Must input an integer (0..{})".format(max_exclusive-1))
    return side

def gameloop(L):
    print("S={} : Q={} ".format(L.state,L.queue))
    while True:
        
        side = poll_side(0,L.n_corners)
        
        L.input(side)
        print("S={} : Q={} ".format(L.state,L.queue))
        has_won = L.check_win()
        if(has_won):
            print("You win!")
            break
    return True
    
def dogame():
    level_choice = int(input("level (1-5)? : "))
    assert 1 <= level_choice <= 5, "Must choose an integer level, 1 through 5, inclusive."
    
    if 1 == level_choice:
        L = LuminationSM_level1()
    elif 2 == level_choice:
        L = LuminationSM_level2()
    elif 3 == level_choice:
        L = LuminationSM_level3()
    elif 4 == level_choice:
        L = LuminationSM_level4()
    elif 5 == level_choice:
        L = LuminationSM_level5()
    else:
        print("Invalid level choice")
        return False
    
    return gameloop(L)
    
        
def main():
    dogame()

if __name__ == "__main__":
    main()
