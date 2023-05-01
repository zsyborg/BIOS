<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}>
    <Route index element={<Home />} />
    <Route path="shop" element={<Shopy />} />
    <Route path="about" element={<About />} />
    <Route path="upload" element={<Form3d />} />
    <Route path="myaccount" element={<Prof />} />
    {/* <Route path="*" element={<NoPage />} /> */}
  </Route>
</Routes>
</BrowserRouter>