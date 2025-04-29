# Code Citations

## License: Apache-2.0
https://github.com/helm/helm/blob/e5e3fac3ca06970ad52012fe8cd92b0d2761bff0/pkg/chartutil/create.go

```
. |
```


## License: Apache-2.0
https://github.com/helm/charts/blob/390ee6614b4bb0da96b397f9b382e3ddca9f59a4/REVIEW_GUIDELINES.md

```
. |
```


## License: MIT
https://github.com/forresthu/forresthu.github.io/blob/9b8a57cd75a1971c64dce253f1f4b41ef78acdbe/_posts/Kubernetes/Tools/2022-04-08-kustomize_helm.md

```
. |
```


## License: Apache-2.0
https://github.com/helm/helm/blob/e5e3fac3ca06970ad52012fe8cd92b0d2761bff0/pkg/chartutil/create.go

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values
```


## License: Apache-2.0
https://github.com/helm/charts/blob/390ee6614b4bb0da96b397f9b382e3ddca9f59a4/REVIEW_GUIDELINES.md

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values
```


## License: MIT
https://github.com/forresthu/forresthu.github.io/blob/9b8a57cd75a1971c64dce253f1f4b41ef78acdbe/_posts/Kubernetes/Tools/2022-04-08-kustomize_helm.md

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values
```


## License: MIT
https://github.com/wulinghui/TechnicalSummary/blob/73734875395200c358512750399181d65378a4d5/docs/Kubernetes/02.k8s/35.Helm%E5%8C%85%E7%AE%A1%E7%90%86/05.%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAchart.md

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values
```


## License: Apache-2.0
https://github.com/helm/helm/blob/e5e3fac3ca06970ad52012fe8cd92b0d2761bff0/pkg/chartutil/create.go

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values.ingress.tls }}
    - hosts:
        {{- range .hosts }}
        - {{ . | quote }}
        {{- end }}
      secretName: {{ .secretName }}
    {{- end }}
  {{- end }}
  rules:
    {{- range .Values.ingress
```


## License: Apache-2.0
https://github.com/helm/charts/blob/390ee6614b4bb0da96b397f9b382e3ddca9f59a4/REVIEW_GUIDELINES.md

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values.ingress.tls }}
    - hosts:
        {{- range .hosts }}
        - {{ . | quote }}
        {{- end }}
      secretName: {{ .secretName }}
    {{- end }}
  {{- end }}
  rules:
    {{- range .Values.ingress
```


## License: MIT
https://github.com/forresthu/forresthu.github.io/blob/9b8a57cd75a1971c64dce253f1f4b41ef78acdbe/_posts/Kubernetes/Tools/2022-04-08-kustomize_helm.md

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values.ingress.tls }}
    - hosts:
        {{- range .hosts }}
        - {{ . | quote }}
        {{- end }}
      secretName: {{ .secretName }}
    {{- end }}
  {{- end }}
  rules:
    {{- range .Values.ingress
```


## License: MIT
https://github.com/wulinghui/TechnicalSummary/blob/73734875395200c358512750399181d65378a4d5/docs/Kubernetes/02.k8s/35.Helm%E5%8C%85%E7%AE%A1%E7%90%86/05.%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAchart.md

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values.ingress.tls }}
    - hosts:
        {{- range .hosts }}
        - {{ . | quote }}
        {{- end }}
      secretName: {{ .secretName }}
    {{- end }}
  {{- end }}
  rules:
    {{- range .Values.ingress
```


## License: Apache-2.0
https://github.com/helm/helm/blob/e5e3fac3ca06970ad52012fe8cd92b0d2761bff0/pkg/chartutil/create.go

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values.ingress.tls }}
    - hosts:
        {{- range .hosts }}
        - {{ . | quote }}
        {{- end }}
      secretName: {{ .secretName }}
    {{- end }}
  {{- end }}
  rules:
    {{- range .Values.ingress.hosts }}
    - host: {{ .host | quote }}
      http:
        paths:
          - path
```


## License: Apache-2.0
https://github.com/helm/charts/blob/390ee6614b4bb0da96b397f9b382e3ddca9f59a4/REVIEW_GUIDELINES.md

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values.ingress.tls }}
    - hosts:
        {{- range .hosts }}
        - {{ . | quote }}
        {{- end }}
      secretName: {{ .secretName }}
    {{- end }}
  {{- end }}
  rules:
    {{- range .Values.ingress.hosts }}
    - host: {{ .host | quote }}
      http:
        paths:
          - path
```


## License: MIT
https://github.com/forresthu/forresthu.github.io/blob/9b8a57cd75a1971c64dce253f1f4b41ef78acdbe/_posts/Kubernetes/Tools/2022-04-08-kustomize_helm.md

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values.ingress.tls }}
    - hosts:
        {{- range .hosts }}
        - {{ . | quote }}
        {{- end }}
      secretName: {{ .secretName }}
    {{- end }}
  {{- end }}
  rules:
    {{- range .Values.ingress.hosts }}
    - host: {{ .host | quote }}
      http:
        paths:
          - path
```


## License: MIT
https://github.com/wulinghui/TechnicalSummary/blob/73734875395200c358512750399181d65378a4d5/docs/Kubernetes/02.k8s/35.Helm%E5%8C%85%E7%AE%A1%E7%90%86/05.%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAchart.md

```
. | nindent 4 }}
  {{- with .Values.ingress.annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  {{- if .Values.ingress.tls }}
  tls:
    {{- range .Values.ingress.tls }}
    - hosts:
        {{- range .hosts }}
        - {{ . | quote }}
        {{- end }}
      secretName: {{ .secretName }}
    {{- end }}
  {{- end }}
  rules:
    {{- range .Values.ingress.hosts }}
    - host: {{ .host | quote }}
      http:
        paths:
          - path
```


## License: unknown
https://github.com/Bullrich/bullrich.github.io/blob/f00255207f30bdccaf5d372b2623435acddd0557/src/blog/2023-10-16-optimize-docker-based-github-actions.md

```
to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_
```


## License: unknown
https://github.com/cogup/fastapi-template/blob/1c405f4846c51f9e78d9d887acf57855b1a4110b/.github/workflows/build-and-push.yml.example

```
to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_
```


## License: unknown
https://github.com/Bullrich/bullrich.github.io/blob/f00255207f30bdccaf5d372b2623435acddd0557/src/blog/2023-10-16-optimize-docker-based-github-actions.md

```
to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{
```


## License: unknown
https://github.com/cogup/fastapi-template/blob/1c405f4846c51f9e78d9d887acf57855b1a4110b/.github/workflows/build-and-push.yml.example

```
to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{
```

