import React from 'react'
import './Visualizer.css'
import * as Algorithms from './Algorithms'

class Visualizer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            speed: 5,
            max_speed: 11,
            array: [],
            color: null,
            pivot: null,
            message: "",
            size: 0,
            height: 100,
            darkMode: false,
            sorting: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {value, name} = event.target;
        if (name === "darkMode"){
            this.setState(prevState => {
                return {
                    darkMode: !prevState.darkMode
                }
            })
        }
        else{
            this.setState({[name]: value})
        }
    }

    resetArray(){
        if (this.state.sorting){
            window.location.reload(true);
        }
        else {
            const new_array = [];
            for (let i = 0; i < this.state.size; i++) {
                new_array.push(getRandomInt(5, this.state.height));
            }
            this.setState({
                array: new_array,
                color: null,
                pivot: null,
                message: ""
            })
        }
    }

    executeInstruction(swap, i){
        const speed = this.state.max_speed - this.state.speed;
        setTimeout(() => {
            const prevStateArray = this.state.array.slice();
            prevStateArray[swap[0]] = swap[1]
            this.setState({
                array: prevStateArray,
                color: swap[0]
            })
        }, speed*i);
    }

    mergeSort() {
        if (this.state.array.length === 0){
            alert("Please adjust the size, then click \"Generate New Array\".")
        }
        else {
            this.setState({
                color: null,
                pivot: null,
                sorting: true,
                message: "Merge Sort has a time complexity of n*log(n)"
            })
            const speed = this.state.max_speed - this.state.speed;
            const anime = (Algorithms.mergeSort(this.state.array, 0, this.state.array.length - 1))[2];
            for (let i = 0; i < anime.length; i++) {
                const swap = anime[i];
                if (swap.length === 3) {
                    setTimeout(() => {
                        this.setState({message: swap[0], sorting: false})
                    }, i * speed)
                } else {
                    this.executeInstruction(swap, i);
                }
            }
        }
    }

    quickSort(){
        if (this.state.array.length === 0){
            alert("Please adjust the size, then click \"Generate New Array\".")
        }
        else {
            this.setState({
                color: null,
                pivot: null,
                sorting: true,
                message: "Quick Sort has a time complexity of n*log(n)"
            })
            const speed = this.state.max_speed - this.state.speed;
            const copy = this.state.array.slice()
            const anime = (Algorithms.quickSort(copy, 0, copy.length - 1))
            for (let i = 0; i < anime.length; i++) {
                const swap = anime[i];
                if (swap.length === 1) {
                    setTimeout(() => {
                        this.setState({pivot: swap[0]})
                    }, speed * i)
                } else if (swap.length === 3) {
                    setTimeout(() => {
                        this.setState({message: swap[0], sorting: false})
                    }, i * speed)
                } else {
                    this.executeInstruction(swap, i);
                }
            }
        }
    }

    bubbleSort(){
        if (this.state.array.length === 0){
            alert("Please adjust the size, then click \"Generate New Array\".")
        }
        else {
            this.setState({
                color: null,
                pivot: null,
                sorting: true,
                message: "Bubble Sort has a time complexity of n^2. I suggest you just click \"Reset\"..."
            })
            const speed = this.state.max_speed - this.state.speed;
            const anime = (Algorithms.bubbleSort(this.state.array))
            for (let i = 0; i < anime.length; i++) {
                const swap = anime[i]
                if (swap.length === 3) {
                    setTimeout(() => {
                        this.setState({message: swap[0], sorting: false})
                    }, speed * i)
                } else {
                    this.executeInstruction(swap, i);
                }
            }
        }
    }

    insertionSort(){
        if (this.state.array.length === 0){
            alert("Please adjust the size, then click \"Generate New Array\".")
        }
        else {
            this.setState({
                color: null,
                pivot: null,
                sorting: true,
                message: "Insertion Sort has a time complexity of n^2. I suggest you just click \"Reset\"..."
            })
            const speed = this.state.max_speed - this.state.speed;
            const anime = (Algorithms.insertionSort(this.state.array))
            for (let i = 0; i <= anime.length - 1; i++) {
                const swap = anime[i]
                if (swap.length === 2) {
                    this.executeInstruction(swap, i);
                } else if (swap.length === 3) {
                    setTimeout(() => {
                        this.setState({message: swap[0], sorting: false})
                    }, i * speed)
                } else {
                    setTimeout(() => {
                        this.setState({pivot: swap[0]})
                    }, speed * i)
                }
            }
        }
    }

    heapSort(){
        if (this.state.array.length === 0){
            alert("Please adjust the size, then click \"Generate New Array\".")
        }
        else{
            this.setState({
                color: null,
                pivot: null,
                sorting: true,
                message: "Heap Sort has a time complexity of n*log(n)"
            })
            const speed = this.state.max_speed - this.state.speed;
            const anime = (Algorithms.heapSort(this.state.array));
            for (let i = 0; i < anime.length; i++) {
                const swap = anime[i]
                if (swap.length === 3) {
                    setTimeout(() => {
                        this.setState({message: swap[0], sorting: false})
                    }, speed * i)
                } else {
                    this.executeInstruction(swap, i);
                }
            }
        }
    }

    checkColor(idx){
        if (idx === this.state.pivot){
            return 'yellow'
        }
        else if (idx === this.state.color){
            return 'red'
        }
        else{
            if (this.state.darkMode){
                return 'blue'
            }
            else{
                return 'gray'
            }
        }
    }

    popup(){
        alert("To check out another algorithm, wait until sorting is complete or click \"Reset\"")
    }


    render(){
        document.getElementById("body").style.backgroundColor = this.state.darkMode? 'black' : 'whitesmoke'
        return(
            <div className="everything">
                <header className="top-header" style={{color: this.state.darkMode? 'white' : 'black'}}>
                    Sorting Algorithm Visualization
                </header>
                <div className="array-container">
                    <nav className="NavBar">
                        <ul className="Nav" style={{color: this.state.darkMode? 'white':'black'}}>
                            <li><label>Dark Mode </label>
                                <input type="checkbox" value={this.state.darkMode} onChange={this.handleChange} className="darkMode" name="darkMode"/>
                                <label htmlFor="darkMode" />
                            </li>
                            <li><h4>1. Customize Array</h4></li>
                            <li>
                                <div className="sliders">
                                    <label>Speed</label>
                                    <input type="range" min="1" max="10" value={this.state.speed} onChange={this.handleChange} name="speed"
                                           style={{marginLeft: "5px"}}/>
                                    <br />
                                    <label>Size</label>
                                    <input type="range" min="50" max="560" value={this.state.size} onChange={this.handleChange} name="size"
                                           style={{marginLeft: "22px"}}/>
                                    <br />
                                    <label>Height</label>
                                    <input type="range" min="5" max="480" value={this.state.height} onChange={this.handleChange} name="height"
                                           style={{marginLeft: "1px"}}/>
                                </div>
                            </li>
                            <br />
                            <li><button className="generate" onClick={() => this.resetArray()}>{this.state.sorting? "Reset":"Generate New Array"}</button></li>
                            <li><h4>2. Pick an Algorithm</h4></li>
                            <li><button className="merge-sort" onClick={() => this.state.sorting? this.popup(): this.mergeSort()}>Merge Sort</button></li>
                            <li><button className="quick-sort" onClick={() => this.state.sorting? this.popup(): this.quickSort()}>Quick Sort</button></li>
                            <li><button className="bubble-sort" onClick={() => this.state.sorting? this.popup(): this.bubbleSort()}>Bubble Sort</button></li>
                            <li><button className="insertion-sort" onClick={() => this.state.sorting? this.popup(): this.insertionSort()}>Insertion Sort</button></li>
                            <li><button className="heap-sort" onClick={() => this.state.sorting? this.popup(): this.heapSort()}>Heap Sort</button></li>
                        </ul>
                    </nav>
                    <div className="arraybar-container">
                        {this.state.array.map((value, idx) => (
                            <div className="array-bar"
                                 key={idx}
                                 style={{height: `${value}px`,
                                     backgroundColor: this.checkColor(idx)}}>
                            </div>
                        ))}
                    </div>
                    <br />
                    <h2 className="message" style={{color: this.state.darkMode? 'gray': 'black'}}>{this.state.message}</h2>
                </div>
            </div>
        )
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Visualizer