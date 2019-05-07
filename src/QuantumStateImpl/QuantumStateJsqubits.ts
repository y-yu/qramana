import { QuantumState, MeasurementResult, QuantumStateParameter, QuantumStateGenerator } from "../QuantumState";
import * as jsq from "jsqubits";

/**
 * QuantumStateGeneratorのjsqubits実装
 */
export const quantumStateJsQubitsGenerator: QuantumStateGenerator = function(param: QuantumStateParameter) {
    return new QuantumStateJsqubits(param);
}

/**
 * QuantumStateのjsqubits実装
 */
export class QuantumStateJsqubits extends QuantumState {
    // 抽象QuantumStateに無いメンバーは全てprivateで持つ
    private _qstate: jsq.jsqubits.QState;

    constructor(param: QuantumStateParameter) {
        super(param);
        this._qstate = jsq.jsqubits(param); // stringで生成しているけど変えたい
        var zero = jsq.jsqubits.Complex.ZERO;
    };

    x(bitId: number) {
        this._qstate.X(bitId);
    }

    z(bitId: number) {
        this._qstate.Z(bitId);
    }

    h(bitId: number) {
        this._qstate.hadamard(bitId);
    }

    cnot(controllBitId: number, targetBitId: number) {
        this._qstate.cnot(controllBitId, targetBitId);
    }

    measure(bitId: number): MeasurementResult {
        return {
            newQuantumState: this,
            result: true
        }
    }

    merge(quantumState: QuantumStateJsqubits): QuantumStateJsqubits {
        this._qstate.tensorProduct(quantumState._qstate);
        return this;
    }

    get length() {
        return this._qstate.numBits();
    }
}
