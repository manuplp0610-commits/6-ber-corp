export default function Fetchdata() {
  const [apiState, setApiState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });
  useEffect(() => {
    setApiState((prev) => ({ ...prev, loading: true }));

    fetch("https://api-hf41.onrender.com/api/article")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur API");
        return res.json();
      })
      .then((data) => {
        setApiState({ loading: false, error: false, data });
      })
      .catch(() => {
        setApiState({ loading: false, error: true, data: undefined });
      });
  }, []);
  return apiState.data;
}
