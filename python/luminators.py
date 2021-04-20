import random

class LuminationStateMachine(object):
    """
    Convention: the state 0 will be "solid red", IE, the winning state.
                But we'll count up because we want to use modulo addition.
    """
    def __init__(self, num_states, num_corners=4,start_state=None,up=0,queue_depth=5):
        self.queue_depth = queue_depth
        self.n_corners = num_corners
        self.n_states = num_states
        self.state = start_state if (start_state is not None) else [random.randint(1,self.n_states) for i in range(self.n_corners)]
        self.queue = [up]
        self.enforce_new_corner = True
    
    def check_win(self):
        if all([0==i for i in self.state]):
            return True
    
    def input(self, corner):
        
        if not (0 <= corner < self.n_corners):
            raise Exception("Invalid new state.")
        
        if self.enforce_new_corner and corner == self.queue[0]:
            #Could maybe throw an exception, but we don't really want this to end the program.
            #Which would require catching this later.
            return False
        
        self.queue.insert(0,corner)
        self.queue = self.queue[:self.queue_depth]
        
        self.transform()
        
        return self.check_win()
    
    def decrement_helper(self,queue_positions=[0]):
        for i in queue_positions:
            if i >= len(self.queue):
                continue
            p = self.queue[i]
            self.state[p] -= 1
            self.state[p] %= self.n_states
    
    def transform(self):
        raise NotImplemented("Abstract base class")
    
    def __repr__(self):
        return "<S={} , Q={}>".format(self.state,self.queue)
    
    

class LuminationSM_level1(LuminationStateMachine):
    def __init__(self):
        super().__init__(5, 4,queue_depth=1, up=0)
    
    def transform(self):
        self.decrement_helper([0])

class LuminationSM_level2(LuminationStateMachine):
    def __init__(self):
        super().__init__(5, 4,queue_depth=2, up=1)
    
    def transform(self):
        self.decrement_helper([0,1])

class LuminationSM_level3(LuminationStateMachine):
    def __init__(self):
        super().__init__(6, 4,queue_depth=3, up=2)
    
    def transform(self):
        up = self.queue[0]
        if up not in self.queue[1:3]:
            self.decrement_helper([1])

class LuminationSM_level4(LuminationStateMachine):
    def __init__(self):
        super().__init__(7, 4,queue_depth=3, up=3)
    
    def transform(self):
        self.decrement_helper([0,1,2])

class LuminationSM_level5(LuminationStateMachine):
    def __init__(self):
        super().__init__(9, 4,queue_depth=4, up=3)
    
    def transform(self):
        self.decrement_helper([0,1,2,3])

def lumination_factory(level_choice):
    L = None
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
        return None
    return L
    
