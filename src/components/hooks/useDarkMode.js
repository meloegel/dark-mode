import { useLocalStorage } from './useLocalStorage';


export const useDarkMode = (key) => {
    const [values, setValues] = useLocalStorage(key); 

    const toggleMode = e => {
        e.preventDefault();
        setValues(!values);
        if(values === false){
            window.document.body.classList.add('dark-mode')
        }else {
            window.document.body.classList.remove('dark-mode')
        }
      };

    return [values, setValues, toggleMode];
}

