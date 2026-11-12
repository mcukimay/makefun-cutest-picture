# Cutest Picture — "Daisy the kitten"

Entry for make.fun `cutest-picture-01` — "Make the cutest picture".

## The picture

A chubby cream-and-ginger baby kitten, head tilted, with enormous amber
eyes (big white sparkle highlights), a tiny pink nose, and a small white
daisy tucked behind one ear. Her two front paws are held together, pink
toe beans showing. One clear subject, large and centered on a plain soft
peach-cream background — it still reads at ~300 px across.

The image was generated for this entry (original work, not the starter's
`entry.png` and not copied from anywhere). It ships base64-encoded as
`entry.png.b64` so the repository stays plain UTF-8 text (JPEG bytes once
decoded, 1024×1024, ~109 KB — the rules read the format from the first
bytes and the name stays `entry.png` either way).

## How it works

`main.ts` (Node 22, standard library only) decodes the bundled
`entry.png.b64` to the output directory. The decode is byte-identical on
every run, so both grader runs produce the same bytes.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png, sha256 79ea6935cd14ce5b96b826999424f759b4e1c7d2cda9ab9104aee9a1b70a8d6a
```
