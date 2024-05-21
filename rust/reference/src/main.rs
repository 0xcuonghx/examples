fn main() {
    ex5();
}

fn ex1() {
    let s1 = String::from("hello");
    // let s2 = s1;
    // println!("{s1}"); // errors be cause s2 already take ownership form s1
}

fn ex2() {
    let s = String::from("hello"); // s comes into scope

    takes_ownership(s); // s's value moves into the function and so is no longer valid here

}

fn takes_ownership(some_string: String) { // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
  // memory is freed.

fn ex3() {
    let mut s = String::from("hello");
    change(&mut s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world"); // borrow can not change value
}

fn ex4() {
let mut s = String::from("hello");

    let r1 = &mut s;
//    let r2 = &mut s; // error cannot borrow twice

//    println!("{}, {}", r1, r2);
}


fn ex5() {
let mut s = String::from("hello");

    let r1 = &s; // no problem
    let r2 = &s; // no problem
    let r3 = &mut s; // problem if r1, r2 used later

    r3.push_str(", world"); 
//    println!("{}, {}, and {}", r1, r2, r3); // cannot borrow mutable here because already have immutable borrow exist
}


fn ex6() {
 let reference_to_nothing = dangle();
}

fn dangle() -> &String {
    let s = String::from("hello");

    &s // this will be removed after end scope
}
