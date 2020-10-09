import { stringContains } from "byots"
import { type } from "os"

const obj = {
  name: 'Niko',
  age: 18,
  birthday: new Date()
}

const infos: Record<keyof typeof obj, string> = {
  name: '233',
  age: '2',
  birthday: Date.now().toString()
}


// 使用ReturnType 获取函数返回值类型
function func() {
  return {
    name: 'nico',
    age: 18
  }
}

type results = ReturnType<typeof func>
let a: results = {
  name: 'wang',
  age: 12
}

// 在代码中声明函数和class类型
declare class Personal {
  name: string
}
declare function getName(personal: Personal): results;

// 函数重载
function add (arg1: string, arg2: string): string;
function add (arg1: number, arg2: number): number;

function add (arg1: string | number, arg2: string | number) {
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return arg1 + arg2;
  } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg1 + arg2;
  }
}
