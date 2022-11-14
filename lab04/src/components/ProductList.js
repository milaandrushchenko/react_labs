import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";



function ProductList() {
    const [categories, setCategories] = useState([]);
    const [selectedСategories, setSelectedСategories] = useState([]);
    const [sortName, setSort] = useState(null);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    async function getProducts() {
        const res = await axios('https://fakestoreapi.com/products');
        setData(res.data);
        setFilteredData(res.data);
    }
    async function getCategories() {
        const res = await axios('https://fakestoreapi.com/products/categories');
        setCategories(res.data);
        toArrayСategories(res.data);
    }
    useEffect(() => {
        return () => {
            getProducts();
            getCategories();
        }
    }, []);

    useEffect(() => {
        Sort();
    }, [sortName]);

    function Sort() {
        setFilteredData(filteredData => [...filteredData.sort((a, b) => a[sortName] > b[sortName] ? 1 : -1)])
    }

    function FilterByCategories(filterName) {
        let arrSelСategories = arrayOfSelectedCategories(filterName)
        setSelectedСategories(arrSelСategories)
        dataFilter(arrSelСategories)
    }

    function arrayOfSelectedCategories(filterName) {
        let arrSelСategories = [...selectedСategories];
        if (filterName) {
            arrSelСategories = arrSelСategories.map(item => {
                if (item.title === filterName.value) {
                    if (filterName.checked) return { title: item.title, selected: true }
                    else if (!filterName.checked) return { title: item.title, selected: false }
                }
                return item;
            }
            );
        }
        return arrSelСategories
    }

    function dataFilter(arr) {
        let arrSelected = arr.filter(category => category.selected === true).map(category => category.title);
        if (arrSelected.length) {
            setFilteredData(data.filter(product => arrSelected.includes(product.category)))
        }
        else {
            setFilteredData(data)
        }
        Sort()
    }


    function toArrayСategories(data) {
        data.forEach(element => {
            setSelectedСategories(selectedСategories => [...selectedСategories, { title: element, selected: false }])
        });
    }

    return (
        <div className="container">
            <div className="slideBar">
                <div className="custom-select" onChange={e => setSort(e.target.value)}>
                    <select>
                        <option >Select sort:</option>
                        <option value="price" >Sort by price</option>
                        <option value="title">Sort by name</option>
                    </select>
                </div>
                <div className="category" >
                    {categories.map((item, index) => {
                        return (
                            <label key={index} className="checkbox"><input onChange={(e) => {
                                FilterByCategories(e.target);
                            }} value={item} type="checkbox" className="checkbox" /><span className="checkbox__text">{item}</span></label>
                        )
                    })}
                </div>
            </div>
            <div className="cardList">{filteredData.map(product => {
                return <Product key={product.id} product={product} />
            })}
            </div>
        </div >
    )
}

export default ProductList;