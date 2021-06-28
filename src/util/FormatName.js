export default function formatName(name = '') {
    const nome = [...new Set(name.split('_'))];
    return nome.join('_');
}