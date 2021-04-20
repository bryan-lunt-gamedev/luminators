// Transcrypt'ed from Python, 2021-04-20 15:10:25
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var LuminationStateMachine =  __class__ ('LuminationStateMachine', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, num_states, num_corners, start_state, up, queue_depth) {
		if (typeof num_corners == 'undefined' || (num_corners != null && num_corners.hasOwnProperty ("__kwargtrans__"))) {;
			var num_corners = 4;
		};
		if (typeof start_state == 'undefined' || (start_state != null && start_state.hasOwnProperty ("__kwargtrans__"))) {;
			var start_state = null;
		};
		if (typeof up == 'undefined' || (up != null && up.hasOwnProperty ("__kwargtrans__"))) {;
			var up = 0;
		};
		if (typeof queue_depth == 'undefined' || (queue_depth != null && queue_depth.hasOwnProperty ("__kwargtrans__"))) {;
			var queue_depth = 5;
		};
		self.queue_depth = queue_depth;
		self.n_corners = num_corners;
		self.n_states = num_states;
		self.state = (start_state !== null ? start_state : (function () {
			var __accu0__ = [];
			for (var i = 0; i < self.n_corners; i++) {
				__accu0__.append (random.randint (1, self.n_states));
			}
			return __accu0__;
		}) ());
		self.queue = [up];
		self.enforce_new_corner = true;
	});},
	get check_win () {return __get__ (this, function (self) {
		if (all ((function () {
			var __accu0__ = [];
			for (var i of self.state) {
				__accu0__.append (0 == i);
			}
			return __accu0__;
		}) ())) {
			return true;
		}
	});},
	get input () {return __get__ (this, function (self, corner) {
		if (!((0 <= corner && corner < self.n_corners))) {
			var __except0__ = Exception ('Invalid new state.');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (self.enforce_new_corner && corner == self.queue [0]) {
			return false;
		}
		self.queue.insert (0, corner);
		self.queue = self.queue.__getslice__ (0, self.queue_depth, 1);
		self.transform ();
		return self.check_win ();
	});},
	get decrement_helper () {return __get__ (this, function (self, queue_positions) {
		if (typeof queue_positions == 'undefined' || (queue_positions != null && queue_positions.hasOwnProperty ("__kwargtrans__"))) {;
			var queue_positions = [0];
		};
		for (var i of queue_positions) {
			if (i >= len (self.queue)) {
				continue;
			}
			var p = self.queue [i];
			self.state [p]--;
			self.state [p] = __mod__ (self.state [p], self.n_states);
		}
	});},
	get transform () {return __get__ (this, function (self) {
		var __except0__ = NotImplemented ('Abstract base class');
		__except0__.__cause__ = null;
		throw __except0__;
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return '<S={} , Q={}>'.format (self.state, self.queue);
	});}
});
export var LuminationSM_level1 =  __class__ ('LuminationSM_level1', [LuminationStateMachine], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (LuminationSM_level1, '__init__') (self, 5, 4, __kwargtrans__ ({queue_depth: 1, up: 0}));
	});},
	get transform () {return __get__ (this, function (self) {
		self.decrement_helper ([0]);
	});}
});
export var LuminationSM_level2 =  __class__ ('LuminationSM_level2', [LuminationStateMachine], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (LuminationSM_level2, '__init__') (self, 5, 4, __kwargtrans__ ({queue_depth: 2, up: 1}));
	});},
	get transform () {return __get__ (this, function (self) {
		self.decrement_helper ([0, 1]);
	});}
});
export var LuminationSM_level3 =  __class__ ('LuminationSM_level3', [LuminationStateMachine], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (LuminationSM_level3, '__init__') (self, 6, 4, __kwargtrans__ ({queue_depth: 3, up: 2}));
	});},
	get transform () {return __get__ (this, function (self) {
		var up = self.queue [0];
		if (!__in__ (up, self.queue.__getslice__ (1, 3, 1))) {
			self.decrement_helper ([0]);
		}
	});}
});
export var LuminationSM_level4 =  __class__ ('LuminationSM_level4', [LuminationStateMachine], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (LuminationSM_level4, '__init__') (self, 7, 4, __kwargtrans__ ({queue_depth: 3, up: 3}));
	});},
	get transform () {return __get__ (this, function (self) {
		for (var i = 0; i < self.n_states; i++) {
			if (i != self.queue [0]) {
				self.state [i]--;
				self.state [i] = __mod__ (self.state [i], self.n_states);
			}
		}
	});}
});
export var LuminationSM_level5 =  __class__ ('LuminationSM_level5', [LuminationStateMachine], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (LuminationSM_level5, '__init__') (self, 9, 4, __kwargtrans__ ({queue_depth: 4, up: 3}));
	});},
	get transform () {return __get__ (this, function (self) {
		self.decrement_helper ([0, 1, 2, 3]);
	});}
});
export var lumination_factory = function (level_choice) {
	var L = null;
	if (1 == level_choice) {
		var L = LuminationSM_level1 ();
	}
	else if (2 == level_choice) {
		var L = LuminationSM_level2 ();
	}
	else if (3 == level_choice) {
		var L = LuminationSM_level3 ();
	}
	else if (4 == level_choice) {
		var L = LuminationSM_level4 ();
	}
	else if (5 == level_choice) {
		var L = LuminationSM_level5 ();
	}
	else {
		print ('Invalid level choice');
		return null;
	}
	return L;
};

//# sourceMappingURL=luminators.map