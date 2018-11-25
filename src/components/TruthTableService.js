export const BOOLEAN_2D = [
    {id:0, p:true, q:true},
    {id:1, p:true, q:false},
    {id:2, p:false, q:true},
    {id:3, p:false, q:false}
];
export const and = (p,q) => p && q;
export const or = (p,q) => p || q;
export const impl = (p,q) => or(!p,q);
export const xnor = (p,q) =>  p === q
export const xor = (p,q) => or(and(p,!q),and(!p,q));
export const nand = (p,q) => !and(p,q);
export const nor = (p,q) => !or(p,q);

class TableOptions {
    constructor(name, label, evaluator, data){
        this._name = name;
        this._label = label;
        this._evaluator = evaluator;
        this._data = data;
    }

    get evaluator() {
        return this._evaluator;
    }

    get label() {
        return this._label;
    }

    get data(){
        return this._data;
    }

    get name(){
        return this._name;
    }
}

export const AND_TRUTH_TABLE_OPTIONS = new TableOptions("Logical conjunction (AND)", "AND", and, BOOLEAN_2D);
export const OR_TRUTH_TABLE_OPTIONS = new TableOptions("Logical disjunction (OR)","OR", or, BOOLEAN_2D);
export const LOGICAL_IMPLICATION_TRUTH_TABLE_OPTIONS = new TableOptions("Logical implication (->)", "->", impl, BOOLEAN_2D);
export const LOGICAL_EQUALITY_TRUTH_TABLE_OPTIONS = new TableOptions("Logical equality (XNOR)","XNOR", xnor, BOOLEAN_2D);
export const EXCLUSIVE_DISJUNCTION_TRUTH_TABLE_OPTIONS = new TableOptions("exclusive disjunction (XOR)", "XOR", and, BOOLEAN_2D);
export const NAND = new TableOptions("Logical NAND","NAND",nand, BOOLEAN_2D)
export const NOR = new TableOptions("Logical NOR","NOR", nor, BOOLEAN_2D)